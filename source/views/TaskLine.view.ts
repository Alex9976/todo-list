import { Div, Img, SvgImage, UL } from 'reactronic-front'
import { style } from './TaskLine.css'
import { Task } from '../models/Task'
import { App } from '../models/App'

export function TaskLine(id: string, task: Task, app: App) {
  return (
    UL('Task' + id, e => {
      e.className = style.class.Task
      Div('Task-element', e => {
        e.onclick = () => {
          task.changeActivity()
        }
        e.className = task.notCompleted ? style.class.TaskElement : style.class.InactiveTaskElement
        e.innerHTML = task.text
      })
      Div('Edit', e => {
        e.onclick = () => {
          app.deleteTask(task)
        }
        e.className = task.notCompleted ? style.class.Edit : style.class.InactiveEdit
        Img('Delete-icon', e => {
          e.src = '../assets/pencil.svg'
        })
      })
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
