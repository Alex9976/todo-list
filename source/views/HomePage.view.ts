import { Div, Img, TextArea, UL } from 'verstak/html'
import { PageView } from './Page.view.js'
import { style } from './Page.css.js'
import { App } from '../models/App.js'
import { TaskLine } from './TaskLine.view.js'

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, () => {
      UL(
        {
          content(b) {
            const e = b.native
            e.className = style.class.List

            let index: number = 0
            app.taskList.forEach((element) => {
              if (element.notCompleted)
                TaskLine(index.toString(), element, app)
              index++
            })
            if (app.completedTasks > 0) {
              Div(
                {
                  content(b) {
                    const e = b.native
                    e.className = style.class.CompletedLabel
                    e.innerHTML = 'Completed ' + app.completedTasks.toString()
                  }
                })
            }
            app.taskList.forEach((element) => {
              if (!element.notCompleted)
                TaskLine(index.toString(), element, app)
              index++
            })
          }
        })
      Div({
        content(b) {
          const e = b.native
          let inputArea: HTMLTextAreaElement
          e.className = style.class.InputTask
          TextArea({
            content(b) {
              const e = b.native
              inputArea = e
              e.placeholder = 'Enter the task'
              e.className = style.class.Input
              inputArea.dataForSensor.keyboard = () => {
                if (inputArea.value.trim() != '') {
                  app.addTask(inputArea.value)
                }
                inputArea.value = ''
              }
            }
          })
          Div({
            content(b) {
              const e = b.native
              e.dataForSensor.click = () => {
                if (inputArea.value.trim() != '') {
                  app.addTask(inputArea.value)
                  inputArea.value = ''
                }
              }
              e.className = style.class.Submit
              Img({
                content(b) {
                  const e = b.native
                  e.src = './source/assets/add.svg'
                }
              })
            }
          })
        }
      })
    })
  )
}
