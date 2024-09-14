import axios from "axios";
//import { HandleError } from "../Utils/HandleError";
export const instance = axios.create({
  baseURL: "/",
  withCredentials: true,
});

export const PrivateRoute = axios.create({
  baseURL: "/",
  withCredentials: true,
});
PrivateRoute.interceptors.request.use(
  (config) => {
    if (config.headers.Authorization) {
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
PrivateRoute.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    // HandleError(error.response.data.messege || "Something Went Wrong");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // HandleError(error.response.data.messege || "Something Went Wrong");
    return Promise.reject(error);
  }
);
