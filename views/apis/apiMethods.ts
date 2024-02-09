import axios from "axios";
import { decrypt } from "../helpers/encryptor";
import { LOCAL_STORAGE_KEYS } from "../helpers/localStorageKeys";
import { ROUTES } from "../helpers/routes";

export const token = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
  if (!token) {
    return null;
  }

  return decrypt(token);
};
export const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  function (config: any) {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token()}`,
      secureddata: "getall",
    };

    // If there is no token, delete if from the header before making a request
    if (!token()) {
      delete config.headers.Authorization;
    }
    // you can also do other modification in config
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(undefined, async function (error) {
  if (error?.response?.status === 401 && token()) {
    localStorage.clear();
    window.location.replace(ROUTES.SIGNIN);
  }
  return Promise.reject(error);
});

export const getData = async (url: string) => {
  const { data } = await axiosInstance({
    method: "get",
    url,
  });
  return data;
};

export const postData = async (url: string, reqBody: {}) => {
  const { data } = await axiosInstance({
    method: "POST",
    url,
    data: reqBody,
  });
  return data;
};

export const patchData = async (url: string, reqBody: {}) => {
  const { data } = await axiosInstance({
    method: "PATCH",
    url,
    data: reqBody,
  });
  return data;
};

export const putData = async (url: string, reqBody: {}) => {
  const { data } = await axiosInstance({
    method: "PUT",
    url,
    data: reqBody,
  });
  return data;
};

export const deleteData = async (url: string, reqBody: {}) => {
  const { data } = await axiosInstance({
    method: "DELETE",
    url,
    data: reqBody,
  });
  return data;
};
