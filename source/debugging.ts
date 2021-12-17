//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import { Rx, TraceLevel } from 'reactronic'
import { HtmlRtti } from 'reactronic-front'

export function configureDebugging(): void {
  HtmlRtti.isDebugAttributeEnabled = false // rdbg attribute in HTML elements
  Rx.setTraceMode(true, TraceLevel.ErrorsOnly)
  Rx.setProfilingMode(false, {
    repetitiveUsageWarningThreshold: Number.MAX_SAFE_INTEGER,
    mainThreadBlockingWarningThreshold: 5,
    asyncActionDurationWarningThreshold: Number.MAX_SAFE_INTEGER,
    garbageCollectionSummaryInterval: Number.MAX_SAFE_INTEGER,
  })
}
