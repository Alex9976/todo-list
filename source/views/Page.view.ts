import { Div } from 'verstak/html'
import { Page } from '../models/Page.js'

type Callback<T = unknown> = (native: T) => void

export function PageView(page: Page, contentRenderer?: Callback<HTMLElement>, rightSideRenderer?: Callback<HTMLElement>) {
  return (
    Div({
      content(b) {
        const e = b.native
        Div({
          content(b) {
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
