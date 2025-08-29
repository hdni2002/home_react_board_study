import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 200px;
  box-sizing: border-box;
`;

export const profileContainer = css`
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
`;

export const profileHeader = css`
  width: 100%;
  height: 200px;
  display: flex;
  background-color: chocolate;
`;

export const profileMain = css`
  width: 100%;
  height: 500px;
  background-color: cyan;
`;

export const profileImgBox = css`
  width: 225px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


export const profileInfoBox = css`
  width: calc(100% - 225px);
  height: 100%;
  padding: 30px 40px;
  box-sizing: border-box;
  color: #333;

  & > h3 {
    font-size: 24px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 15px;

    & > p {
      margin: 0px;
    }

    & > button {
      border: none;
      padding: 3px 5px;
      font-size: 11px;
      font-weight: 600;
      border-radius: 4px;
      background-color: #0d6efd;
      color: white;
      cursor: pointer;
    }
  }
`;
