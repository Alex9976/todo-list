
import { css } from '@emotion/css'
import { restyler } from 'reactronic-front'
import { themes } from './Themes'

export const style = restyler(() => {

  const RightSide = css`
    grid-row: 1 / span 2;
    grid-column: 3;
    overflow: hidden;

    @media screen and (max-width: 450px) {
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
      justify-self: center;
    }
  `

  return {
    Page: css`
      margin: 0;
      display: grid;
      grid-gap: 2em 4em;
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr 1fr 1.2fr;
      overflow-x: hidden;

      @media screen and (max-width: 450px) {
        grid-template-rows: auto auto 1fr;
        grid-template-columns: 1fr 1fr;
      }
    `,

    Title: css`
      grid-row: 1 / span 1;
      grid-column: 1 / span 2;
      font-size: 300%;
      font-weight: bold;
      line-height: 1.2;
      text-transform: uppercase;
      padding-left: 1.5ch;
      border-left: 0.12ch solid ${themes.active.activeItemMarker};
      color: ${themes.active.titleForeground};
    `,

    Content: css`
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
      font-size: 100%;
      line-height: 1.2;
      padding-bottom: 0.5ch;
      overflow: hidden;

      @media screen and (max-width: 450px) {
        grid-row: 3 / span 1;
        font-size: 120%;
      }
    `,

    RightSide,

    Description: css`
      font-size: 110%;

      img {
        height: 0.93ch;
        margin-left: 1ch;
        margin-right: 1ch;
      }

      b {
        font-weight: inherit;
        color: ${themes.active.emphasizedText};
      }

      a {
        border-bottom: 0.05em dashed ${themes.active.emphasizedText};
        color: ${themes.active.emphasizedText};
      }
    `,

    Picture: css`
      ${RightSide}

      img {
        width: 100%;
        height: auto;
      }

      @media screen and (max-width: 450px) {
        width: 60%;
      }
    `,
  }
})
