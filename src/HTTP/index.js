import axios, { Axios } from "axios";

const HTTP = axios.create({
  baseURL: process.env.REACT_APP_ROOT_PATH,
});

HTTP.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem("accessToken"));
  if (token && req.headers) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
});

export default HTTP;
