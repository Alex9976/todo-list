import { css } from '@emotion/css'
import { restyler } from 'reactronic-front'

export const style = restyler(() => {

  return {
    Delete: css`
      margin: 0;
      user-select: none;
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
    user-select: none;
    padding: 9px 15px;
    border-radius: 0 3px 3px 0;
    background-color: rgba(115, 115, 115, 0.5);
    transition: background-color .2s ease;
    :hover, :focus {
      transition: background-color .2s ease;
      background-color: rgba(200, 0, 0, 0.5);
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
  }
})
