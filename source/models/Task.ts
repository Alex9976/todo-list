import { ObservableObject, reaction, transaction, unobservable } from 'reactronic'
export class Task extends ObservableObject {
  text: string
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

}