import { Div, Img, LI, TextArea, UL } from 'reactronic-front'
import { style } from './TaskLine.css'
import { Task } from '../models/Task'
import { App } from '../models/App'

export function TaskLine(id: string, task: Task, app: App) {
  return (
    LI('Task' + id, e => {
      let submitInput: HTMLTextAreaElement
      e.className = style.class.Task
      if (task.notCompleted)
        e.draggable = true
      else
        e.draggable = false
      if (!task.isEdit) {
        Div('Task-element', e => {
          e.onclick = () => {
            task.changeActivity()
          }
          e.className = task.notCompleted ? style.class.TaskElement : style.class.InactiveTaskElement
          e.innerHTML = task.text
        })
      }
      else {
        TextArea('Task', e => {
          submitInput = e
          submitInput.onkeydown = e => {
            if (e.key == 'Enter' && !e.shiftKey) {
              e.preventDefault()
              if (submitInput.value.trim() != '') {
                app.editTask(task, submitInput.value)
              }
              submitInput.value = ''
            }
          }
          e.value = task.text
          e.className = style.class.Input
          e.cols = 40
          e.rows = 20
        })
      }
      if (task.notCompleted) {
        Div('Edit', e => {
          e.onclick = () => {
            if (task.isEdit)
              app.editTask(task, submitInput.value)
            else
              app.editTask(task)
          }
          e.className = task.notCompleted ? style.class.Edit : style.class.InactiveEdit
          Img('Edit-icon', e => {
            e.src = task.isEdit ? '../assets/check.svg' : '../assets/pencil.svg'
          })
        })
      }
      Div('Delete', e => {
        e.onclick = () => {
          app.deleteTask(task)
        }
        e.className = task.notCompleted ? style.class.Delete : style.class.InactiveDelete
        Img('Delete-icon', e => {
          e.src = '../assets/trash.svg'
        })
      })
    })

  )
}
