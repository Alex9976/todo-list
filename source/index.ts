//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import { Transaction } from 'reactronic'
import { HtmlBody, RxDom } from 'reactronic-front'
import { configureDebugging } from './debugging'
import { App } from './models/App'
import { AppWindow } from './views/AppWindow.view'

const version: string = '$BUILD_TIMESTAMP'

configureDebugging()

const app = Transaction.run(() => new App(version))

RxDom.Root(() => {
  HtmlBody('html > body', null, () => {
    AppWindow(app)
  })
})
