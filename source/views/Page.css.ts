import { css } from '@emotion/css'
import { restyler } from 'reactronic-front'
import { themes } from './Themes'

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
      width: 94%;
      height: 45px;
      padding: 0 10px;
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
      padding: 7px 15px;
      cursor: pointer;
      border-radius: 0 4px 4px 0;
      background-color: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(5px);
      transition: background-color .2s ease;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(0, 0, 0, 0.25);
      }
    `,

    List: css`
      font-size: 110%;
    `,
  }
})