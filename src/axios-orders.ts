import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://burger-application-93383.firebaseio.com/",
});

export default instance;
