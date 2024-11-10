import { Div } from 'verstak/html'
import { App } from '../models/App.js'
import { style } from './AppWindow.css.js'
import { HomePageView } from './HomePage.view.js'
import { Mode } from 'reactronic'

export function AppWindow(
  key: string,
  app: App) {
  return (
    Div({
      key,
      mode: Mode.autonomous,
      content(b) {
        const e = b.native
        e.className = style.class.Body
        HomePageView(app)
      }
    })
  )
}
