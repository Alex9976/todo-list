import { LoggingLevel, ReactiveSystem } from 'reactronic'

export function configureDebugging(): void {
  ReactiveSystem.setLoggingMode(true, LoggingLevel.ErrorsOnly)
  ReactiveSystem.setProfilingMode(false, {
    repetitiveUsageWarningThreshold: Number.MAX_SAFE_INTEGER,
    mainThreadBlockingWarningThreshold: 5,
    asyncActionDurationWarningThreshold: Number.MAX_SAFE_INTEGER,
    garbageCollectionSummaryInterval: Number.MAX_SAFE_INTEGER,
  })
}
