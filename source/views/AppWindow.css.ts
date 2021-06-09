import { css } from '@emotion/css'
import { restyler } from 'reactronic-front'
import { themes } from './Themes'

export const style = restyler(() => {
  return {
    AppWindow: css`
      display: grid;
      grid-gap: 2em 4em;
      grid-template-rows: auto 1fr auto;
      grid-template-columns: 0 31fr 31fr 38fr 0;
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

      @media screen and (max-width: 750px) {
        grid-column-gap: 2em;
      }
    `,

    TopLine: css`
      grid-row: 1;
      grid-column: 1 / span 5;
      background-color: #122F47;
    `,

    Header: css`
      grid-row: 1;
      grid-column: 2 / span 3;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media screen and (max-width: 900px) {
        flex-direction: column;
      }
    `,

    Logo: css`
      vertical-align: bottom;
      align-self: baseline;
      font-size: 127%;
      padding: 0.25em 0 0 0.1em; // TODO: resize the logo image and get rid of 0.1em offset

      img {
        vertical-align: top;
        width: auto;
        height: 1em;
      }

      a {
        color: ${themes.active.logoForeground};
      }
    `,

    NevodLogo: css`
      margin-left: 0.5ch;
      padding: 0 0.5ch;
      font-weight: bold;
      background-color: ${themes.active.logoBackground};
      color: ${themes.active.logoForeground};
      text-shadow: 0 0 1px black;
    `,

    Menu: css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      font-size: 150%;
      padding-top: 0.25em;
    `,

    Body: css`
      grid-row: 2 / span 1;
      grid-column: 2 / span 3;
    `,

    Footer: css`
      grid-row: 3;
      grid-column: 1 / span 5;
      font-size: smaller;
      color: ${themes.active.footerForeground};
      text-align: center;
      margin-bottom: 0.25em;

      a {
        color: inherit;
      }
    `,
  }
})
