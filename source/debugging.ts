import { Rx, TraceLevel } from 'reactronic'

export function configureDebugging(): void {
  Rx.setTraceMode(true, TraceLevel.ErrorsOnly)
  Rx.setProfilingMode(false, {
    repetitiveUsageWarningThreshold: Number.MAX_SAFE_INTEGER,
    mainThreadBlockingWarningThreshold: 5,
    asyncActionDurationWarningThreshold: Number.MAX_SAFE_INTEGER,
    garbageCollectionSummaryInterval: Number.MAX_SAFE_INTEGER,
  })
}
