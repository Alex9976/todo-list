export class Task {
  readonly text: string
  readonly creationDate: Date;
  isActive: boolean

  constructor(text: string) {
    this.text = text
    this.creationDate = new Date()
    this.isActive = true
  }
}