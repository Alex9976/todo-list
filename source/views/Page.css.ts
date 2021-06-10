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

    Submit: css`
      height: 45px;
      padding: 7px 15px;
      cursor: pointer;
      border-radius: 0 4px 4px 0;
      background-color: rgba(0, 0, 0, 0.5);
      transition: background-color .2s ease;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(0, 0, 0, 0.1);
      }
    `,

    InputTask: css`    
      display: flex;   
      justify-content: center;
      align-items: center;
      margin: 0;
      position: absolute;
      font-size: 25px;
      left: 0;
      bottom: 20px;
      width: 100%;
    `,

    Input: css`
      margin: 0;
      width: 94%;
      height: 45px;
      padding: 0 10px;
      border-radius: 4px 0 0 4px;
      background-color: rgba(0, 0, 0, 0.5);
      transition: background-color .2s ease;
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(0, 0, 0, 0.1);
      }
    `,

    Task: css`
      display: flex;
      cursor: pointer;
      margin: 4px 0;
      width: 100%;
      height: 45px;
      align-items: center;
    `,

    Delete: css`
      margin: 0;
      padding: 9px 15px;
      border-radius: 0 3px 3px 0;
      background-color: rgba(115, 115, 115, 1);
      transition: background-color .2s ease;
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(200, 0, 0, 1);
      }
    `,
    InactiveDelete: css`
    margin: 0;
    padding: 9px 15px;
    border-radius: 0 3px 3px 0;
    opacity: 0.6;
    background-color: rgba(115, 115, 115, 1);
    transition: background-color .2s ease;
    :hover, :focus {
      transition: background-color .2s ease;
      background-color: rgba(200, 0, 0, 1);
    }
  `,

    TaskElement: css`
      margin: 0;
      padding: 9px 10px;
      width: 100%;
      border-radius: 3px 0 0 3px;
      background-color: rgba(96, 96, 96, 1);
      transition: background-color .2s ease;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(104, 104, 104, 1);
      }
    `,
    InactiveTaskElement: css`
      text-decoration:line-through;
      margin: 0;
      padding: 9px 10px;
      width: 100%;
      border-radius: 3px 0 0 3px;
      background-color: rgba(96, 96, 96, .35);
      transition: background-color .2s ease;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(108, 108, 108, .35);
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
