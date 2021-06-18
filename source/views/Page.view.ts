import { Div, Render } from 'reactronic-front'
import { Page } from '../models/Page'

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
