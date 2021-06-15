import { Div, Img, Input, RxDiv, TextArea } from 'reactronic-front'
import { PageView } from './Page.view'
import { style } from './Page.css'
import { App } from '../models/App'
import { TaskLine } from './TaskLine.view'

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, e => {
      RxDiv('List', null, e => {
        e.className = style.class.List
        app.taskList.forEach((element, index) => {
          if (element.notCompleted)
            TaskLine(index.toString(), element, app)
        })
        if (app.completedTasks > 0) {
          Div('Completed-tasks', e => {
            e.className = style.class.CompletedLabel
            e.innerHTML = 'Completed ' + app.completedTasks.toString()
          })
        }
        app.taskList.forEach((element, index) => {
          if (!element.notCompleted)
            TaskLine(index.toString(), element, app)
        })
      })
      Div('Task-input', e => {
        let submitInput: HTMLTextAreaElement
        e.className = style.class.InputTask
        TextArea('Task', e => {
          submitInput = e
          e.placeholder = 'Enter the task'
          e.className = style.class.Input
          e.cols = 40
          e.rows = 20
        })
        Div('Submit', e => {
          e.onclick = () => {
            if (submitInput.value.trim() != '') {
              app.addTask(submitInput.value)
              submitInput.value = ''
            }
          }
          submitInput.onkeydown = e => {
            if (e.key == 'Enter') {
              if (submitInput.value.trim() != '') {
                app.addTask(submitInput.value)
                submitInput.value = ''
              }
            }
          }
          e.className = style.class.Submit
          Img('Add-icon', e => {
            e.src = '../assets/add.svg'
          })
        })
      })
    })
  )
}
