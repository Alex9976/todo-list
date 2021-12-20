import { Div, Img, RxLI } from 'reactronic-dom'
import { style } from './TaskLine.css'
import { Task } from '../models/Task'
import { App } from '../models/App'

export function TaskLine(id: string, task: Task, app: App) {
  return (
    RxLI('Task' + id, task, e => {
      let inputArea: HTMLDivElement
      e.className = style.class.Task

      e.dataForSensor.htmlDraggable = task.notCompleted && !task.isEdit ? task : undefined
      e.dataForSensor.htmlDrag = task.notCompleted && !task.isEdit ? task : undefined
      e.draggable = true

      if (!task.isEdit) {
        Div('Task-element', e => {
          e.dataForSensor.click = () => task.changeActivity()
          e.className = task.notCompleted ? style.class.TaskElement : style.class.InactiveTaskElement
          e.innerHTML = task.text
        })
      }
      else {
        Div('Task', e => {
          inputArea = e
          inputArea.contentEditable = 'true'
          inputArea.dataForSensor.keyboard = () => {
            if (inputArea.innerHTML.trim() !== '') {
              app.editTask(task, inputArea.innerHTML)
            }
          }
          e.innerHTML = task.text
          e.className = style.class.Input
        })
      }
      if (task.notCompleted) {
        Div('Edit', e => {
          e.dataForSensor.click = () => task.isEdit ? app.editTask(task, inputArea.innerHTML) : app.editTask(task)
          e.className = style.class.Edit
          Img('Edit-icon', e => {
            e.src = task.isEdit ? './assets/check.svg' : './assets/pencil.svg'
          })
        })
      }
      Div('Delete', e => {
        e.dataForSensor.click = () => { app.deleteTask(task) }
        e.className = task.notCompleted ? style.class.Delete : style.class.InactiveDelete
        Img('Delete-icon', e => {
          e.src = './assets/trash.svg'
        })
      })
    })
  )
}
