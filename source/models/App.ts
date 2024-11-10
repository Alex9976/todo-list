import { LoggingLevel, unobs, ObservableObject, options, reactive, transactional, raw } from 'reactronic'
import { KeyboardModifiers, PointerButton, HtmlSensors } from 'verstak'
import { Page } from './Page.js'
import { Task } from './Task.js'

export class App extends ObservableObject {
  @raw readonly version: string
  @raw readonly homePage: Page
  @raw completedTasks: number
  @raw sensors: HtmlSensors
  @raw currentItemID: number
  @raw nextItemId: number
  taskList: Task[] = []

  constructor(version: string, e: HTMLElement) {
    super()
    this.completedTasks = 0
    this.currentItemID = 0
    this.nextItemId = 0
    this.version = version
    this.sensors = new HtmlSensors(e)
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

  @transactional
  addTask(text: string): void {
    this.taskList = this.taskList.toMutable()
    this.taskList.push(new Task(this.convertLineBreaks(text)))
  }

  @transactional
  deleteTask(task: Task): void {
    this.taskList = this.taskList.toMutable()
    this.taskList.splice(this.taskList.indexOf(task), 1)
  }

  @transactional
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

  @reactive
  contentTasks(): void {
    this.completedTasks = this.taskList.filter(x => !x.notCompleted).length
    localStorage.setItem('tasks', JSON.stringify(this.taskList))
  }

  @reactive @options({ logging: LoggingLevel.Off })
  pointerActions(): void {
    try {
      const pointer = this.sensors.pointer
      if (pointer.clicking !== undefined) {
        const action = pointer.clicking
        if (action instanceof Function)
          unobs(() => action())
      }
    } catch (e) {
      console.error(e)
    }
  }

  @reactive @options({ logging: LoggingLevel.Off })
  keyboardActions(): void {
    try {
      const keyboard = this.sensors.keyboard
      if ((keyboard.down === 'Enter') && (keyboard.modifiers !== KeyboardModifiers.shift)) {
        const action = keyboard.elementDataList[0]
        if (action instanceof Function)
          unobs(() => action())
        this.sensors.keyboard.preventDefault = true
      }
    } catch (e) {
      console.error(e)
    }
  }

  @reactive
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
