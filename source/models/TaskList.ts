import { ObservableObject, reaction, transaction, unobservable } from 'reactronic'
import { Task } from './Task'
import { TaskLine } from '../views/TaskLine.view'
import { Div, Manifest } from 'reactronic-front'

export class TaskList extends ObservableObject {
  @unobservable list: Task[]
  task: Task

  constructor() {
    super()
    this.task = new Task('as')
    this.list = []
  }

  @transaction
  addTask(text: string): void {
    this.task = new Task(text)
    this.list.push(this.task)
  }

  @reaction
  printList(): void {
    localStorage.setItem('tasks', JSON.stringify(this.list))
    console.log(this.list)
    const list = document.getElementById('List')
    if (list != null)
      list.innerHTML = 'sdfsdf'
  }
}