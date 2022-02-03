import { Callback, Div } from 'reactronic-dom'
import { Page } from '../models/Page'

export function PageView(page: Page, contentRenderer?: Callback<HTMLElement>, rightSideRenderer?: Callback<HTMLElement>) {
  return (
    Div('PageView-' + page.link, e => {
      Div('Content', e => {
        if (contentRenderer)
          contentRenderer(e)
      })
      if (rightSideRenderer)
        rightSideRenderer(e)
    })
  )
}
