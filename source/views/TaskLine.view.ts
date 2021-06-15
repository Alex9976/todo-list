import { Div, UL } from 'reactronic-front'
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
        e.className = task.isActive ? style.class.TaskElement : style.class.InactiveTaskElement
        e.innerHTML = task.text
      })
      Div('Delete', e => {
        e.onclick = () => {
          app.deleteTask(task)
        }
        e.className = task.isActive ? style.class.Delete : style.class.InactiveDelete
        e.innerHTML = 'Delete'
      })
    })

  )
}
