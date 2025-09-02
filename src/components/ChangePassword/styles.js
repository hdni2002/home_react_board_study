import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const inputBox = css`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 12px;

  & > button {
    border: none;
    padding: 10px 10px;
    border-radius: 8px;
    background-color: #0d6efd;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
  & > ul {
    width: 100%;
    padding-left: 20px;
    box-sizing: border-box;

    & > li {
      list-style: disc;
      font-size: 13px;
      color: #dc3545;
    }
  }
`;
