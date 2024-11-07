import { css } from '@emotion/css'
import { restyler } from 'verstak'
import { themes } from './Themes.js'

export const style = restyler(() => {
  return {
    Body: css`
      width: 100%;
      font-size: calc(14px + (20 - 14) * (100vw - 800px) / (1920 - 800));
      font-family: Calibri, Tahoma, Arial, sans-serif;
      background: url("./source/assets/background.jpg");
      background-size: cover;
      color: ${themes.active.foreground};
      min-height: 100vh;

      a {
        text-decoration: none;
        outline: none;
        color: ${themes.active.foreground};
      }
    `,
  }
})
