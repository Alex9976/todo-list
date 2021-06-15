import { ObservableObject, reaction, Ref, transaction, unobservable } from 'reactronic'
import { Page } from './Page'
import { Task } from './Task'

export class App extends ObservableObject {
  @unobservable readonly version: string
  @unobservable readonly homePage: Page
  @unobservable completedTasks: number
  taskList: Task[] = []
  activePage: Page

  constructor(version: string) {
    super()
    this.completedTasks = 0
    this.version = version
    this.homePage = new Page('/home', '<img src="assets/home.svg"/>', 'Todo')
    this.activePage = this.homePage
    this.activePage.isActive = true
    const saveTasks = JSON.parse(localStorage.getItem('tasks') as string) as Task[]
    if (saveTasks != null) {
      saveTasks.forEach(element => {
        const task = new Task(element.text)
        task.notCompleted = element.notCompleted
        this.taskList.push(task)
      })
    }
  }

  @transaction
  addTask(text: string): void {
    this.taskList = this.taskList.toMutable()
    this.taskList.push(new Task(text))
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
        task.text = newText
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

}
