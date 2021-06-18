import { Div, Img, Input, RxDiv, RxUL, TextArea } from 'reactronic-front'
import { PageView } from './Page.view'
import { style } from './Page.css'
import { App } from '../models/App'
import { TaskLine } from './TaskLine.view'

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, e => {
      RxUL('List', null, e => {
        e.className = style.class.List

        //TODO: Find an alternative
        let ind: number = 0

        app.taskList.forEach((element, index) => {
          if (element.notCompleted)
            TaskLine(ind.toString(), element, app)
          ind++
        })
        if (app.completedTasks > 0) {
          Div('Completed-tasks', e => {
            e.className = style.class.CompletedLabel
            e.innerHTML = 'Completed ' + app.completedTasks.toString()
          })
        }
        app.taskList.forEach((element, index) => {
          if (!element.notCompleted)
            TaskLine(ind.toString(), element, app)
          ind++
        })


        const getNextElementID = (currentElement: any) => {
          const list = (currentElement.classList as DOMTokenList).toString()
          if (list.includes('moveable')) {
            const nextId = parseInt(list.substring(list.indexOf('moveable') + 8, list.length))
            return nextId
          }
          else
            return null
        }

        e.addEventListener('dragover', (evt) => {
          evt.preventDefault()
          if (evt.target === null)
            return
          const activeElement = e.querySelector('.selected')
          const activeClassList = activeElement?.classList.toString()
          if (activeClassList != null) {
            const currentItemID = parseInt(activeClassList.substring(activeClassList.indexOf('moveable') + 8, activeClassList.length))

            const currentElement = evt.target
            const nextItemId = getNextElementID(currentElement)

            if (nextItemId === currentItemID || nextItemId === null) {
              return
            }
            app.swapTasks(currentItemID, nextItemId)
          }
        })


      })
      Div('Task-input', e => {
        let inputArea: HTMLTextAreaElement
        e.className = style.class.InputTask
        TextArea('Task', e => {
          inputArea = e
          e.placeholder = 'Enter the task'
          e.className = style.class.Input
          inputArea.eventInfo = {
            keyboard: () => {
              if (inputArea.value.trim() != '') {
                app.addTask(inputArea.value)
              }
              inputArea.value = ''
            }
          }
        })
        Div('Submit', e => {
          e.eventInfo = {
            pointer: () => {
              if (inputArea.value.trim() != '') {
                app.addTask(inputArea.value)
                inputArea.value = ''
              }
            },
          }
          e.className = style.class.Submit
          Img('Add-icon', e => {
            e.src = '../assets/add.svg'
          })
        })
      })
    })
  )
}
