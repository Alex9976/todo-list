import { ObservableObject, reaction, transaction, unobservable } from 'reactronic'

export class Task extends ObservableObject {
  text: string
  notCompleted: boolean

  constructor(text: string) {
    super()
    this.text = text
    this.notCompleted = true
  }

  @transaction
  changeActivity(): void {
    this.notCompleted = !this.notCompleted
  }
}
