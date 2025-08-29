import { instance } from "../utils/instance";

export const addBoardRequest = async (data) => {
  instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  try {
    const response = await instance.post("/board/add", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBoardList = async () => {
  try {
    const response = await instance.get("/board/list");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBoardDetail = async (boardId) => {
  try {
    const response = await instance.get(`/board/${boardId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const removeBoard = async (boardId) => {
  try {
    const response = await instance.post(`/board/remove/${boardId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateBoardRequest = async (updateBoardData) => {
  try {
    const response = await instance.post("/board/update", updateBoardData);
    return response;
  } catch (error) {
    return error.response;
  }
};
