import { css } from '@emotion/css'
import { restyler } from 'reactronic-front'
import { themes } from './Themes'

export const style = restyler(() => {
  return {
    AppWindow: css`
      font-size: calc(14px + (20 - 14) * (100vw - 800px) / (1920 - 800));
      font-family: Calibri, Tahoma, Arial, sans-serif;
      background-color: ${themes.active.background};
      color: ${themes.active.foreground};
      min-height: 100vh;

      a {
        text-decoration: none;
        outline: none;
        color: ${themes.active.foreground};
      }
    `,

    Body: css`
      width: 100%;
      padding: 20px
    `,
  }
})
