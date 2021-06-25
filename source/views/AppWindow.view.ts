import { A, Div, renderChildrenNow, RxDiv } from 'reactronic-front'
import { App } from '../models/App'
import { style } from './AppWindow.css'
import { HomePageView } from './HomePage.view'


export function AppWindow(
  app: App) {
  return (
    Div('Body', e => {
      e.className = style.class.Body
      HomePageView(app)
    })
  )
}
