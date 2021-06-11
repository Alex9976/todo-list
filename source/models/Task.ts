import { ObservableObject, reaction, transaction, unobservable } from 'reactronic'
export class Task extends ObservableObject {
  @unobservable readonly text: string
  isActive: boolean

  constructor(text: string) {
    super()
    this.text = text
    this.isActive = true
  }

  @transaction
  changeActivity(): void {
    this.isActive = !this.isActive
  }

  @reaction
  print(): void {
    console.log('hfgh')
  }
}