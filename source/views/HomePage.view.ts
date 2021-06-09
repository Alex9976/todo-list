import { Div, Input, UL } from 'reactronic-front'
import { PageView } from './Page.view'
import { style } from './Page.css'
import { App } from '../models/App'

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, e => {
      Div('List', e => {
        e.className = style.class.Description
        UL('Task', e => {
          e.className = style.class.Task
          e.innerHTML = 'Task'
        })
        UL('Task', e => {
          e.className = style.class.Task
          e.innerHTML = 'Task'
        })
      })
      Div('Task-input', e => {
        e.className = style.class.InputTask
        Input('Task', e => {
          e.className = style.class.Input
          e.type = 'text'
        })
        Div('Submit', e => {
          e.className = style.class.Submit
          e.innerHTML = 'Add'
        })
      })
    })
  )
}
