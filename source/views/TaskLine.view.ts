import { Div, UL } from 'reactronic-front'
import { style } from './TaskLine.css'
import { Task } from '../models/Task'

export function TaskLine(id: string, task: Task) {
  return (
    UL('Task' + id, e => {
      e.className = style.class.Task
      Div('Task-element', e => {
        e.onclick = async () => {
          task.changeActivity()
          e.className = task.isActive ? style.class.TaskElement : style.class.InactiveTaskElement
        }
        e.className = task.isActive ? style.class.TaskElement : style.class.InactiveTaskElement
        e.innerHTML = task.text
      })
      Div('Delete', e => {
        e.onclick = async () => {
          console.log(id)
        }
        e.className = task.isActive ? style.class.Delete : style.class.InactiveDelete
        e.innerHTML = 'Delete'
      })
    })

  )
}