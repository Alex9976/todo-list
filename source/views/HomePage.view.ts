
import { Div } from 'reactronic-front'
import { PageView } from './Page.view'
import { style } from './Page.css'
import { App } from '../models/App'

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, e => {
      Div('Description', e => {
        e.className = style.class.Description
        e.innerHTML = '<div>Todo</div>'
      })
    })
  )
}
