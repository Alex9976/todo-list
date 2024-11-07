
import { ObservableObject, Transaction, transactional, raw } from 'reactronic'
import { Theme, DarkBlueTheme } from './Theme.js'

export class Themes extends ObservableObject {
  @raw readonly all: Theme[]
  active: Theme

  constructor(...themes: Theme[]) {
    super()
    this.all = []
    themes.forEach(x => this.all.push(x))
    this.active = themes[0]
  }

  @transactional
  setActive(value: Theme): void {
    this.active = value
  }

  @transactional
  setActiveByName(name: string): void {
    const i = this.all.findIndex(t => t.name === name)
    if (i >= 0)
      this.active = this.all[i]
  }

  @transactional
  setNextActive(): void {
    const i = (this.all.indexOf(this.active) + 1) % this.all.length
    const theme = this.all[i]
    this.active = theme
  }
}

export const themes = Transaction.run(null, () => {
  return new Themes(new DarkBlueTheme())
})
