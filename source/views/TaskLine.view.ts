import { Div, Img, LI } from 'verstak/html'
import { style } from './TaskLine.css.js'
import { Task } from '../models/Task.js'
import { App } from '../models/App.js'

export function TaskLine(id: string, task: Task, app: App) {
  return (
    LI({
      content(b) {
        const e = b.native
        let inputArea: HTMLDivElement
        e.className = style.class.Task

        e.dataForSensor.htmlDraggable = task.notCompleted && !task.isEdit ? task : undefined
        e.dataForSensor.htmlDrag = task.notCompleted && !task.isEdit ? task : undefined
        e.draggable = true

        if (!task.isEdit) {
          Div({
            content(b) {
              const e = b.native
              e.dataForSensor.click = () => task.changeActivity()
              e.className = task.notCompleted ? style.class.TaskElement : style.class.InactiveTaskElement
              e.innerHTML = task.text
            }
          })
        }
        else {
          Div({
            content(b) {
              const e = b.native
              inputArea = e
              inputArea.contentEditable = 'true'
              inputArea.dataForSensor.keyboard = () => {
                if (inputArea.innerHTML.trim() !== '') {
                  app.editTask(task, inputArea.innerHTML)
                }
              }
              e.innerHTML = task.text
              e.className = style.class.Input
            }
          })
        }
        if (task.notCompleted) {
          Div({
            content(b) {
              const e = b.native
              e.dataForSensor.click = () => task.isEdit ? app.editTask(task, inputArea.innerHTML) : app.editTask(task)
              e.className = style.class.Edit
              Img({
                content(b) {
                  const e = b.native
                  e.src = task.isEdit ? './source/assets/check.svg' : './source/assets/pencil.svg'
                }
              })
            }
          })
        }
        Div({
          content(b) {
            const e = b.native
            e.dataForSensor.click = () => { app.deleteTask(task) }
            e.className = task.notCompleted ? style.class.Delete : style.class.InactiveDelete
            Img({
              content(b) {
                const e = b.native
                e.src = './source/assets/trash.svg'
              }
            })
          }
        })
      }
    })
  )
}
