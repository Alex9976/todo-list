import { nonreactive, ObservableObject, options, reaction, TraceLevel, transaction, unobservable } from 'reactronic'
import { KeyboardModifiers, PointerButton, HtmlSensors } from 'reactronic-front'
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

  constructor(version: string) {
    super()
    this.completedTasks = 0
    this.currentItemID = 0
    this.nextItemId = 0
    this.version = version
    this.sensors = new HtmlSensors()
    this.homePage = new Page('/home', '<img src="assets/home.svg"/>', 'Todo')
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

  //@transaction
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

  @reaction @options({ trace: TraceLevel.Silent })
  pointerActions(): void {
    try {
      const pointer = this.sensors.pointer
      if (pointer.clicked !== undefined) {
        const action = pointer.clicked
        if (action instanceof Function)
          nonreactive(() => action())
      }
    } catch (e) {
      console.error(e)
    }
  }

  @reaction @options({ trace: TraceLevel.Silent })
  keyboardActions(): void {
    try {
      const keyboard = this.sensors.keyboard
      if ((keyboard.down === 'Enter') && (keyboard.modifiers !== KeyboardModifiers.Shift)) {
        const action = keyboard.elementDataList[0]
        if (action instanceof Function)
          nonreactive(() => action())
        this.sensors.keyboard.preventDefault = true
      }
    } catch (e) {
      console.error(e)
    }
  }

  @reaction
  protected handleDragAndDrop(): void {
    const drag = this.sensors.htmlDrag
    const task = drag.draggable as Task | undefined
    if (task) {
      if (drag.dragStarted) {
        drag.effectAllowed = 'copy'
        if (drag.draggingOver) {
          if (drag.dragTarget instanceof Task) {
            drag.dropAllowed = true
            drag.dropEffect = 'copy'
          }
          else {
            drag.dropAllowed = false
          }
        }
      }
      if (drag.dragFinished) {
        if (drag.dropped) {
          if (drag.dragTarget instanceof Task) {
            this.currentItemID = this.taskList.indexOf(task)
            this.nextItemId = this.taskList.indexOf(drag.dragTarget as Task)
            this.swapTasks()
          }
        }
      }
    }
  }
}
