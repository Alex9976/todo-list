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

      e.ondragstart = () => {
        e.classList.add('selected')
        e.classList.add('moveable' + id)
        app.currentItemID = app.taskList.indexOf(task)
      }

      e.ondragend = () => {
        e.classList.remove('selected')
        e.classList.remove('moveable' + id)
        if (app.currentItemID != app.nextItemId)
          app.swapTasks()
      }

      if (!task.isEdit) {
        Div('Task-element', e => {
          e.eventInfo = {
            pointer: () => { task.changeActivity() }
          }
          e.className = task.notCompleted ? style.class.TaskElement : style.class.InactiveTaskElement
          if (task.notCompleted)
            e.classList.add('moveable' + id)
          e.innerHTML = task.text
        })
      }
      else {
        Div('Task', e => {
          inputArea = e
          inputArea.contentEditable = 'true'
          inputArea.eventInfo = {
            keyboard: () => {
              if (inputArea.innerHTML.trim() != '') {
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
          e.eventInfo = {
            pointer: () => {
              if (task.isEdit)
                app.editTask(task, inputArea.innerHTML)
              else
                app.editTask(task)
            }
          }
          e.className = style.class.Edit
          Img('Edit-icon', e => {
            e.src = task.isEdit ? '../assets/check.svg' : '../assets/pencil.svg'
          })
        })
      }
      Div('Delete', e => {
        e.eventInfo = {
          pointer: () => { app.deleteTask(task) }
        }
        e.className = task.notCompleted ? style.class.Delete : style.class.InactiveDelete
        Img('Delete-icon', e => {
          e.src = '../assets/trash.svg'
        })
      })
    })

  )
}
