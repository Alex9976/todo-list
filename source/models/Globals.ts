import { ObservableObject, Transaction, Monitor, transactional } from 'reactronic'

export class Resizing extends ObservableObject {
  timestamp: number = 0

  pulse(timeout: number = 3): void {
    if (timeout >= 0)
      setTimeout(() => this.doPulse(), timeout)
    else
      this.doPulse()
  }

  @transactional
  protected doPulse(): void {
    this.timestamp++
  }
}

export class Globals {
  static readonly Loading = Monitor.create('Loading', 1000, 250, 1)
  static readonly Resizing = Transaction.run(null, () => new Resizing())
}
