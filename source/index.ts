import { Transaction } from 'reactronic'
import { configureDebugging } from './debugging'
import { Globals } from './models/Globals'
import { App } from './models/App'
import { AppWindow } from './views/AppWindow.view'

const version: string = '$BUILD_TIMESTAMP'

configureDebugging()

document.body.onresize = () => Globals.Resizing.pulse(-1)

const app = Transaction.run(() => new App(version))
AppWindow(app)
