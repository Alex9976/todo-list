import { ObservableObject, reaction, transaction, unobservable } from 'reactronic'
export class Task extends ObservableObject {
  text: string
  isActive: boolean
  state: boolean

  constructor(text: string) {
    super()
    this.text = text
    this.isActive = true
    this.state = true
  }

  @transaction
  changeActivity(): void {
    this.isActive = !this.isActive
  }

  @transaction
  changeState(): void {
    this.state = !this.state
  }

  @reaction
  print(): void {
    console.log('print' + this.text)
  }
}