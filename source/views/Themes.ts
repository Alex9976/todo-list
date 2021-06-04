
import { ObservableObject, Transaction, transaction, unobservable } from 'reactronic'
import { Theme, DarkBlueTheme } from './Theme'

export class Themes extends ObservableObject {
  @unobservable readonly all: Theme[]
  active: Theme

  constructor(...themes: Theme[]) {
    super()
    this.all = []
    themes.forEach(x => this.all.push(x))
    this.active = themes[0]
  }

  @transaction
  setActive(value: Theme): void {
    this.active = value
  }

  @transaction
  setActiveByName(name: string): void {
    const i = this.all.findIndex(t => t.name === name)
    if (i >= 0)
      this.active = this.all[i]
  }

  @transaction
  setNextActive(): void {
    const i = (this.all.indexOf(this.active) + 1) % this.all.length
    const theme = this.all[i]
    this.active = theme
  }
}

export const themes = Transaction.run(() => {
  return new Themes(new DarkBlueTheme())
})
