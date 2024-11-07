import { Callback, Div } from 'verstak'
import { Page } from '../models/Page.js'

export function PageView(page: Page, contentRenderer?: Callback<HTMLElement>, rightSideRenderer?: Callback<HTMLElement>) {
  return (
    Div({
      rebuild(b) {
        const e = b.native
        Div({
          rebuild(b) {
            const e = b.native
            if (contentRenderer)
              contentRenderer(e)
          }
        })
        if (rightSideRenderer)
          rightSideRenderer(e)
      }
    })
  )
}
