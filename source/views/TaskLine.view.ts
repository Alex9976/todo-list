import { Div, Img, LI, TextArea, UL } from 'reactronic-front'
import { style } from './TaskLine.css'
import { Task } from '../models/Task'
import { App } from '../models/App'

export function TaskLine(id: string, task: Task, app: App) {
  return (
    LI('Task' + id, e => {
      let submitInput: HTMLDivElement
      e.className = style.class.Task
      if (task.notCompleted && !task.isEdit)
        e.draggable = true
      else
        e.draggable = false
      if (!task.isEdit) {
        Div('Task-element', e => {
          e.eventInfo = {
            pointer: () => { task.changeActivity() }
          }
          e.className = task.notCompleted ? style.class.TaskElement : style.class.InactiveTaskElement
          e.innerHTML = task.text
        })
      }
      else {
        Div('Task', e => {
          submitInput = e
          submitInput.contentEditable = 'true'
          submitInput.eventInfo = {
            keyboard: () => {
              if (submitInput.innerHTML.trim() != '') {
                app.editTask(task, submitInput.innerHTML)
              }
              submitInput.innerHTML = ''
            }
          }
          e.innerHTML = task.text
          e.className = style.class.Input
        })
      }
      if (task.notCompleted) {

        //TODO: Replace to drag & drop
        Div('UpArrow', e => {
          e.eventInfo = {
            pointer: () => { app.updatePriority(task, true) }
          }
          e.className = style.class.Arrow
          Img('Up-icon', e => {
            e.src = '../assets/up-arrow.svg'
          })
        })
        Div('DownArrow', e => {
          e.eventInfo = {
            pointer: () => { app.updatePriority(task, false) }
          }
          e.className = style.class.Arrow
          Img('Down-icon', e => {
            e.src = '../assets/down-arrow.svg'
          })
        })

        Div('Edit', e => {
          e.eventInfo = {
            pointer: () => {
              if (task.isEdit)
                app.editTask(task, submitInput.innerHTML)
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
