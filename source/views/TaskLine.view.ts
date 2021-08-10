import { Div, Img, RxLI } from 'reactronic-front'
import { style } from './TaskLine.css'
import { Task } from '../models/Task'
import { App } from '../models/App'

export function TaskLine(id: string, task: Task, app: App) {
  return (
    RxLI('Task' + id, task, e => {
      let inputArea: HTMLDivElement
      e.className = style.class.Task

      e.associatedData.drag = task.notCompleted && !task.isEdit ? task : undefined

      e.classList.toggle('selected', app.draggingTask === task)

      if (task.notCompleted) {
        e.classList.add('moveable' + id)
        e.classList.add('move')
      }
      else {
        e.classList.remove('moveable' + id)
        e.classList.remove('move')
      }

      if (!task.isEdit) {
        Div('Task-element', e => {
          e.associatedData.pointer = () => task.changeActivity()
          e.className = task.notCompleted ? style.class.TaskElement : style.class.InactiveTaskElement
          e.innerHTML = task.text
        })
      }
      else {
        Div('Task', e => {
          inputArea = e
          inputArea.contentEditable = 'true'
          inputArea.associatedData.keyboard = () => {
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
          e.associatedData.pointer = () => task.isEdit ? app.editTask(task, inputArea.innerHTML) : app.editTask(task)
          e.className = style.class.Edit
          Img('Edit-icon', e => {
            e.src = task.isEdit ? './assets/check.svg' : './assets/pencil.svg'
          })
        })
      }
      Div('Delete', e => {
        e.associatedData.pointer = () => { app.deleteTask(task) }
        e.className = task.notCompleted ? style.class.Delete : style.class.InactiveDelete
        Img('Delete-icon', e => {
          e.src = './assets/trash.svg'
        })
      })
    })
  )
}
