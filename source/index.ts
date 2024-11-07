import { Transaction } from 'reactronic'
import { HtmlBody } from 'verstak'
import { configureDebugging } from './debugging.js'
import { App } from './models/App.js'
import { AppWindow } from './views/AppWindow.view.js'

const version: string = '$BUILD_TIMESTAMP'

configureDebugging()

const app = Transaction.run(null, () => new App(version))

HtmlBody({
  rebuild(b) {
    AppWindow('Body', app)
  }
})
