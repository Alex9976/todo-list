import { ObservableObject, raw } from 'reactronic'

export class Page extends ObservableObject {
  @raw readonly link: string
  @raw readonly hashLink: string
  @raw readonly linkTitle: string
  @raw readonly title: string
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
