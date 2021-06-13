import { Div, Render } from 'reactronic-front'
import { Page } from '../models/Page'
import { style } from './Page.css'

export function PageView(page: Page, contentRenderer?: Render<HTMLElement>, rightSideRenderer?: Render<HTMLElement>) {
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
