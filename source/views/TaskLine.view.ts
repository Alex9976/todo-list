import { Div, Img, LI, TextArea, UL } from 'reactronic-front'
import { style } from './TaskLine.css'
import { Task } from '../models/Task'
import { App } from '../models/App'

export function TaskLine(id: string, task: Task, app: App) {
  return (
    LI('Task' + id, e => {
      let inputArea: HTMLDivElement
      e.className = style.class.Task
      if (task.notCompleted && !task.isEdit)
        e.draggable = true
      else
        e.draggable = false

      if (task.notCompleted) {
        e.classList.add('moveable' + id)
        e.classList.add('move')
      }
      else {
        e.classList.remove('moveable' + id)
        e.classList.remove('move')
      }

      e.sensorData = {
        pointer: () => {
          e.classList.add('selected')
          app.currentItemID = app.taskList.indexOf(task)
          app.nextItemId = app.currentItemID
        }
      }

      /* e.sensorData = {
         pointer: () => {
           e.classList.remove('selected')
         }
       }*/

      if (!task.isEdit) {
        Div('Task-element', e => {
          e.sensorData = {
            pointer: () => { task.changeActivity() }
          }
          e.className = task.notCompleted ? style.class.TaskElement : style.class.InactiveTaskElement
          e.innerHTML = task.text
        })
      }
      else {
        Div('Task', e => {
          inputArea = e
          inputArea.contentEditable = 'true'
          inputArea.sensorData = {
            keyboard: () => {
              if (inputArea.innerHTML.trim() !== '') {
                app.editTask(task, inputArea.innerHTML)
              }
            }
          }
          e.innerHTML = task.text
          e.className = style.class.Input
        })
      }
      if (task.notCompleted) {
        Div('Edit', e => {
          e.sensorData = {
            pointer: () => {
              if (task.isEdit)
                app.editTask(task, inputArea.innerHTML)
              else
                app.editTask(task)
            }
          }
          e.className = style.class.Edit
          Img('Edit-icon', e => {
            e.src = task.isEdit ? './assets/check.svg' : './assets/pencil.svg'
          })
        })
      }
      Div('Delete', e => {
        e.sensorData = {
          pointer: () => { app.deleteTask(task) }
        }
        e.className = task.notCompleted ? style.class.Delete : style.class.InactiveDelete
        Img('Delete-icon', e => {
          e.src = './assets/trash.svg'
        })
      })
    })

  )
}
