import { ObservableObject, reaction, Ref, transaction, unobservable } from 'reactronic'
import { Page } from './Page'
import { Task } from './Task'

export class App extends ObservableObject {
  @unobservable readonly version: string
  @unobservable readonly homePage: Page
  @unobservable t = [new Task('22')]
  activePage: Page

  constructor(version: string) {
    super()
    this.version = version
    this.homePage = new Page('/home', '<img src="assets/home.svg"/>', 'Todo')
    this.activePage = this.homePage
    this.activePage.isActive = true
  }

  @transaction
  addTask(text: string): void {
    this.t.push(new Task(text))
  }

  @transaction
  deleteTask(task: Task): void {
    this.t.splice(this.t.indexOf(task), 1)
  }

  @reaction
  updateTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.t))
  }

}
