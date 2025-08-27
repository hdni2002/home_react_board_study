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
