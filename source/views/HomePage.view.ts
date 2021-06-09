import { Div, Input, UL } from 'reactronic-front'
import { PageView } from './Page.view'
import { style } from './Page.css'
import { App } from '../models/App'
import { Task } from '../models/Task'

const tasks: Task[] = [new Task('Task1'), new Task('Task2'), new Task('Task3')]

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, e => {
      Div('List', e => {
        e.className = style.class.Description
        tasks.forEach(element => {
          ShowTask(element)
        })
      })
      Div('Task-input', e => {
        e.className = style.class.InputTask
        Input('Task', e => {
          e.placeholder = 'Input your task'
          e.className = style.class.Input
          e.type = 'text'
        })
        Div('Submit', e => {
          e.className = style.class.Submit
          e.innerHTML = 'Add'
        })
      })
    })
  )
}

function ShowTask(task: Task) {
  return (
    UL('Task', e => {
      e.className = style.class.Task
      Div('Task-element', e => {
        e.className = style.class.TaskElement
        e.innerHTML = task.text
      })
      Div('Delete', e => {
        e.className = style.class.Delete
        e.innerHTML = 'Delete'
      })
    })
  )
}