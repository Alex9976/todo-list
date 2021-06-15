import { css } from '@emotion/css'
import { restyler } from 'reactronic-front'
import { themes } from './Themes'

export const style = restyler(() => {
  return {
    Body: css`
      width: 100%;
      font-size: calc(14px + (20 - 14) * (100vw - 800px) / (1920 - 800));
      font-family: Calibri, Tahoma, Arial, sans-serif;
      background: url("../assets/background.jpg");
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
