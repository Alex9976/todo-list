import { css } from '@emotion/css'
import { restyler } from 'reactronic-dom'

export const style = restyler(() => {
  return {
    InputTask: css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      position: fixed;
      font-size: 25px;
      left: 0;
      bottom: 20px;
      width: 100%;
    `,

    Input: css`
      margin: 0;
      width: calc(100vw - 100px);
      height: 45px;
      color: #fff;
      font-size: 24px;
      font-family: Calibri, Tahoma, Arial, sans-serif;
      border: none;
      resize: none;
      padding: 6px 10px 0 10px;
      /*padding: 0 10px;*/
      border-radius: 4px 0 0 4px;
      background-color: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(5px);
      transition: background-color .2s ease;
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(0, 0, 0, 0.25);
      }
    `,

    Submit: css`
      height: 45px;
      user-select: none;
      padding: 5px 15px;
      cursor: pointer;
      border-radius: 0 4px 4px 0;
      background-color: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(5px);
      transition: background-color .2s ease;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(0, 0, 0, 0.25);
      }

      img {
        width: 20px;
        filter: invert(100%);
      }
    `,

    CompletedLabel: css`
      padding: 7px;
      margin: 5px;
      user-select: none;
      font-size: 90%;
      /*background-color: rgba(0, 0, 0, 0.4);
      border-radius: 5px;
      backdrop-filter: blur(5px);
      width: 10%;*/
    `,

    List: css`
      font-size: 110%;
      overflow: auto;
      height: calc(100vh - 91px);
      padding: 20px;
      overflow-y: scroll;
    `,
  }
})
