import { Div, Input } from 'reactronic-front'
import { PageView } from './Page.view'
import { style } from './Page.css'
import { App } from '../models/App'
import { Task } from '../models/Task'
import { TaskLine } from './TaskLine.view'

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, e => {
      Div('List', e => {
        e.className = style.class.Description
        app.taskList.list.forEach(element => {
          TaskLine(app.taskList.list.indexOf(element).toString(), element)
        })
        TaskLine('-1', app.taskList.task)
      })
      Div('Task-input', e => {
        let submitInput: HTMLInputElement
        e.className = style.class.InputTask
        Input('Task', e => {
          submitInput = e
          e.placeholder = 'Input your task'
          e.className = style.class.Input
          e.type = 'text'
        })
        Div('Submit', e => {
          e.onclick = () => {
            if (submitInput.value != '') {
              app.taskList.addTask(submitInput.value)
              submitInput.value = ''
            }
          }
          submitInput.onkeydown = e => {
            if (e.key == 'Enter') {
              if (submitInput.value != '') {
                app.taskList.addTask(submitInput.value)
                submitInput.value = ''
              }
            }
          }
          e.className = style.class.Submit
          e.innerHTML = 'Add'
        })
      })
    })
  )
}