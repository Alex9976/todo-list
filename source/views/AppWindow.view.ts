import { Mode, Div } from 'verstak'
import { App } from '../models/App.js'
import { style } from './AppWindow.css.js'
import { HomePageView } from './HomePage.view.js'


export function AppWindow(
  key: string,
  app: App) {
  return (
    Div({
      key,
      mode: Mode.PinpointRebuild,
      rebuild(b) {
        const e = b.native
        app.sensors.listen(e)
        e.className = style.class.Body
        HomePageView(app)
      }
    })
  )
}
