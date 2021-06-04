
import { isolated, ObservableObject, reaction, Ref, unobservable } from 'reactronic'
import { Page } from './Page'

export class App extends ObservableObject {
  @unobservable readonly version: string
  @unobservable readonly homePage: Page
  @unobservable readonly pages: Page[]
  activePage: Page

  constructor(version: string) {
    super()
    this.version = version
    this.homePage = new Page('/home', '<img src="assets/home.svg"/>', 'Pattern-Based Text Search')
    this.pages = [this.homePage]
    this.activePage = this.pages[0]
    this.activePage.isActive = true
  }
}
