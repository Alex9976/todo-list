import { css } from '@emotion/css'
import { restyler } from 'reactronic-front'

export const style = restyler(() => {

  return {
    Delete: css`
      margin: 0;

      min-height: 45px;
      padding: 9px 15px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        width: 20px;
        filter: invert(100%);
      }
      border-radius: 0 3px 3px 0;
      background-color: rgba(39, 39, 39, 1);
      transition: background-color .2s ease;
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(200, 0, 0, 1);
      }
    `,

    Edit: css`
      margin: 0;

      min-height: 45px;
      padding: 9px 15px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        width: 20px;
        filter: invert(100%);
      }
      background-color: rgba(39, 39, 39, 1);
      transition: background-color .2s ease;
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(105, 153, 0, 1);
      }
    `,

    InactiveDelete: css`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 9px 15px;
    img {
        width: 20px;
        filter: invert(100%);
      }
    min-height: 45px;
    border-radius: 0 3px 3px 0;
    background-color: rgba(39, 39, 39, 0.5);
    backdrop-filter: blur(5px);
    transition: background-color .2s ease;
    :hover, :focus {
      transition: background-color .2s ease;
      background-color: rgba(200, 0, 0, 0.5);
    }
    `,

    InactiveEdit: css`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 9px 15px;
    img {
        width: 20px;
        filter: invert(100%);
      }
    min-height: 45px;
    background-color: rgba(39, 39, 39, 0.5);
    backdrop-filter: blur(5px);
    transition: background-color .2s ease;
    :hover, :focus {
      transition: background-color .2s ease;
      background-color: rgba(105, 153, 0, 0.5);
    }
    `,

    Task: css`
      display: flex;
      cursor: pointer;
      user-select: none;
      margin: 6px 0;

      max-width: 100%;
      min-height: 45px;
      align-items: stretch;
      @media screen and (max-width: 1000px) {
        min-height: 40px;
      }

      @media screen and (max-width: 600px) {
        min-height: 38px;
      }
    `,

    TaskElement: css`
      margin: 0;
      padding: 9px 10px;
      width: 90%;
      word-wrap: break-word;
      flex: 1 0 auto;
      min-height: 45px;
      border-radius: 3px 0 0 3px;
      background-color: rgba(36, 36, 36, 1);
      backdrop-filter: blur(5px);
      transition: background-color .2s ease;
      user-select: none;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(53, 56, 58, 1);
      }
    `,

    InactiveTaskElement: css`
      text-decoration: line-through;
      margin: 0;
      flex: 1 0 auto;
      min-height: 45px;
      padding: 9px 10px;
      word-wrap: break-word;
      width: 90%;
      border-radius: 3px 0 0 3px;
      backdrop-filter: blur(5px);
      background-color: rgba(36, 36, 36, 0.35);
      transition: background-color .2s ease;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(53, 56, 58, 0.35);
      }
    `,
  }
})
