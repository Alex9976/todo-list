import { ObservableObject, reaction, Ref, unobservable } from 'reactronic'
import { Page } from './Page'
import { TaskList } from './TaskList'

export class App extends ObservableObject {
  @unobservable readonly version: string
  @unobservable readonly homePage: Page
  @unobservable taskList: TaskList = new TaskList()

  activePage: Page

  constructor(version: string) {
    super()
    this.version = version
    this.homePage = new Page('/home', '<img src="assets/home.svg"/>', 'Todo')
    this.activePage = this.homePage
    this.activePage.isActive = true
  }
}
