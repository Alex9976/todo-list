import { ObservableObject, unobservable } from 'reactronic'

export class Page extends ObservableObject {
  @unobservable readonly link: string
  @unobservable readonly hashLink: string
  @unobservable readonly linkTitle: string
  @unobservable readonly title: string
  content: string
  isActive: boolean

  constructor(link: string, linkTitle: string, title: string) {
    super()
    this.link = link
    this.hashLink = '#' + link
    this.linkTitle = linkTitle
    this.title = title
    this.content = ''
    this.isActive = false
  }
}
