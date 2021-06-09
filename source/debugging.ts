import { Reactronic, TraceLevel } from 'reactronic'
import { trace, HtmlRtti } from 'reactronic-front'

export function configureDebugging(): void {
  HtmlRtti.isDebugAttributeEnabled = false // rdbg attribute in HTML elements
  Reactronic.setTraceMode(true, TraceLevel.Error)
  Reactronic.setProfilingMode(false, {
    asyncActionDurationWarningThreshold: Number.MAX_SAFE_INTEGER,
    mainThreadBlockingWarningThreshold: 5,
    repetitiveReadWarningThreshold: Number.MAX_SAFE_INTEGER,
    garbageCollectionSummaryInterval: Number.MAX_SAFE_INTEGER,
  })
  trace(false, 'r', 'SetPropValues')
}
