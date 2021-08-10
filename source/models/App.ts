import { nonreactive, ObservableObject, reaction, trace, TraceLevel, transaction, unobservable } from 'reactronic'
import { DragStage, KeyboardModifiers, PointerButton, HtmlSensors } from 'reactronic-front'
import { Page } from './Page'
import { Task } from './Task'

export class App extends ObservableObject {
  @unobservable readonly version: string
  @unobservable readonly homePage: Page
  @unobservable completedTasks: number
  @unobservable sensors: HtmlSensors
  @unobservable currentItemID: number
  @unobservable nextItemId: number
  taskList: Task[] = []
  draggingTask: Task | undefined

  constructor(version: string) {
    super()
    this.completedTasks = 0
    this.currentItemID = 0
    this.nextItemId = 0
    this.version = version
    this.sensors = new HtmlSensors()
    this.homePage = new Page('/home', '<img src="assets/home.svg"/>', 'Todo')
    this.draggingTask = undefined
    const saveTasks = JSON.parse(localStorage.getItem('tasks') as string) as Task[]
    if (saveTasks !== null) {
      this.taskList = saveTasks.map(x => {
        const task = new Task(x.text)
        task.notCompleted = x.notCompleted
        return task
      })
    }
  }

  convertLineBreaks(inputString: string): string {
    while (inputString.includes('\n'))
      inputString = inputString.replace('\n', '<br />')
    return inputString
  }

  @transaction
  swapTasks(): void {
    if (this.currentItemID !== this.nextItemId) {
      this.taskList = this.taskList.toMutable()
      const task: Task = this.taskList[this.currentItemID]
      this.taskList.splice(this.currentItemID, 1)
      const list = this.taskList.slice(this.nextItemId)
      this.taskList.splice(this.nextItemId)
      this.taskList.push(task)
      this.taskList = this.taskList.concat(list)
    }
  }

  @transaction
  addTask(text: string): void {
    this.taskList = this.taskList.toMutable()
    this.taskList.push(new Task(this.convertLineBreaks(text)))
  }

  @transaction
  deleteTask(task: Task): void {
    this.taskList = this.taskList.toMutable()
    this.taskList.splice(this.taskList.indexOf(task), 1)
  }

  @transaction
  editTask(task: Task, newText?: string): void {
    if (task.isEdit) {
      if (newText != null) {
        task.text = this.convertLineBreaks(newText)
      }
      task.isEdit = false
    }
    else {
      task.isEdit = true
    }
  }

  @reaction
  updateTasks(): void {
    this.completedTasks = this.taskList.filter(x => !x.notCompleted).length
    localStorage.setItem('tasks', JSON.stringify(this.taskList))
  }

  @reaction
  @trace(TraceLevel.Suppress)
  pointerActions(): void {
    try {
      const pointer = this.sensors.pointer
      if (pointer.click === PointerButton.Left) {
        const action = pointer.associatedDataList[0]
        if (action instanceof Function)
          nonreactive(() => action())
      }
    } catch (e) {
      console.error(e)
    }
  }

  @reaction
  @trace(TraceLevel.Suppress)
  keyboardActions(): void {
    try {
      const keyboard = this.sensors.keyboard
      if ((keyboard.down === 'Enter') && (keyboard.modifiers !== KeyboardModifiers.Shift)) {
        const action = keyboard.associatedDataList[0]
        if (action instanceof Function)
          nonreactive(() => action())
        this.sensors.preventDefault()
      }
    } catch (e) {
      console.error(e)
    }
  }

  @reaction
  protected handleDragAndDrop(): void {
    const { drag } = this.sensors
    const stage = drag.stage
    const task = drag.associatedDataList[0]
    if (task instanceof Task) {
      switch (stage) {
        case DragStage.Started:
          this.draggingTask = task
          drag.allowedCursor = 'copy'
          this.currentItemID = this.taskList.indexOf(task)
          this.nextItemId = this.currentItemID
          break
        case DragStage.Dragging:
          if (drag.draggingObject instanceof Task && drag.draggingObject !== task) {
            drag.cursor = 'copy'
            drag.allowDropHere()
          }
          break
        case DragStage.Dropped:
          this.nextItemId = this.taskList.indexOf(task)
          this.swapTasks()
          break
        case DragStage.Finished:
          this.draggingTask = undefined
          break
      }
    }
  }
}
