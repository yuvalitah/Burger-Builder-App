import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-application-93383.firebaseio.com/",
});

export default instance;
