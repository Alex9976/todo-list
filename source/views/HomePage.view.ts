import { Div, Img, RxUL, TextArea } from 'reactronic-front'
import { PageView } from './Page.view'
import { style } from './Page.css'
import { App } from '../models/App'
import { TaskLine } from './TaskLine.view'

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, e => {
      RxUL('List', null, e => {
        e.className = style.class.List

        let index: number = 0
        app.taskList.forEach((element) => {
          if (element.notCompleted)
            TaskLine(index.toString(), element, app)
          index++
        })
        if (app.completedTasks > 0) {
          Div('Completed-tasks', e => {
            e.className = style.class.CompletedLabel
            e.innerHTML = 'Completed ' + app.completedTasks.toString()
          })
        }
        app.taskList.forEach((element) => {
          if (!element.notCompleted)
            TaskLine(index.toString(), element, app)
          index++
        })
      })
      Div('Task-input', e => {
        let inputArea: HTMLTextAreaElement
        e.className = style.class.InputTask
        TextArea('Task', e => {
          inputArea = e
          e.placeholder = 'Enter the task'
          e.className = style.class.Input
          inputArea.sensorData = {
            keyboard: () => {
              if (inputArea.value.trim() != '') {
                app.addTask(inputArea.value)
              }
              inputArea.value = ''
            }
          }
        })
        Div('Submit', e => {
          e.sensorData = {
            pointer: () => {
              if (inputArea.value.trim() != '') {
                app.addTask(inputArea.value)
                inputArea.value = ''
              }
            },
          }
          e.className = style.class.Submit
          Img('Add-icon', e => {
            e.src = './assets/add.svg'
          })
        })
      })
    })
  )
}
