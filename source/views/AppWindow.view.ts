import { A, Div, RxDiv } from 'reactronic-front'
import { App } from '../models/App'
import { style } from './AppWindow.css'
import { HomePageView } from './HomePage.view'


export function AppWindow(
  app: App) {
  return (
    Div('AppWindow', e => {
      e.className = style.class.AppWindow
      RxDiv('Body', null, e => {
        e.className = style.class.Body
        HomePageView(app)
      })
    })
  )
}