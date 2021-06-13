import { Div, Input } from 'reactronic-front'
import { PageView } from './Page.view'
import { style } from './Page.css'
import { App } from '../models/App'
import { TaskLine } from './TaskLine.view'

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, e => {
      Div('List', e => {
        e.className = style.class.List
        app.taskList.forEach(element => {
          if (element.isActive)
            TaskLine(app.taskList.indexOf(element).toString(), element, app)
        })
        if (app.completedTasks > 0) {
          Div('Completed-tasks', e => {
            e.className = style.class.CompletedLabel
            e.innerHTML = 'Completed ' + app.completedTasks.toString()
          })
        }
        app.taskList.forEach(element => {
          if (!element.isActive)
            TaskLine(app.taskList.indexOf(element).toString(), element, app)
        })
      })
      Div('Task-input', e => {
        let submitInput: HTMLInputElement
        e.className = style.class.InputTask
        Input('Task', e => {
          submitInput = e
          e.placeholder = 'Enter the task'
          e.className = style.class.Input
          e.type = 'text'
        })
        Div('Submit', e => {
          e.onclick = () => {
            if (submitInput.value != '') {
              app.addTask(submitInput.value)
              submitInput.value = ''
            }
          }
          submitInput.onkeydown = e => {
            if (e.key == 'Enter') {
              if (submitInput.value != '') {
                app.addTask(submitInput.value)
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