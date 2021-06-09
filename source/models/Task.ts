export class Task {
  readonly text: string
  readonly creationDate: Date

  constructor(text: string) {
    this.text = text
    this.creationDate = new Date()
  }
}