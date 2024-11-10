import { Transaction } from 'reactronic'
import { configureDebugging } from './debugging.js'
import { App } from './models/App.js'
import { AppWindow } from './views/AppWindow.view.js'
import { Window } from 'verstak'

const version: string = '$BUILD_TIMESTAMP'

configureDebugging()

Window({
  content(b) {
    const app = Transaction.run(null, () => new App(version, b.native))
    AppWindow('App', app)
  }
})
