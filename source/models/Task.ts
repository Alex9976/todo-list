import { ObservableObject, transaction } from 'reactronic'

export class Task extends ObservableObject {
  text: string
  notCompleted: boolean
  isEdit: boolean

  constructor(text: string) {
    super()
    this.text = text
    this.notCompleted = true
    this.isEdit = false
  }

  @transaction
  changeActivity(): void {
    this.notCompleted = !this.notCompleted
  }
}
