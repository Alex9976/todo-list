import { Transaction } from 'reactronic'
import { RxHtmlBody, RxNode } from 'reactronic-dom'
import { configureDebugging } from './debugging'
import { App } from './models/App'
import { AppWindow } from './views/AppWindow.view'

const version: string = '$BUILD_TIMESTAMP'

configureDebugging()

const app = Transaction.run(null, () => new App(version))

RxNode.launch(() => {
  RxHtmlBody('html > body', null, () => {
    AppWindow(app)
  })
})

