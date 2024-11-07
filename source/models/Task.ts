import { ObservableObject, transactional } from 'reactronic'

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

  @transactional
  changeActivity(): void {
    if (!this.isEdit)
      this.notCompleted = !this.notCompleted
  }
}
