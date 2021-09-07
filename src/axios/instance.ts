import axios from "axios";
import getAuthHeader from "../helpers/getAuthHeader";

const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  timeout: 60000,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getAuthHeader();

    if (token) {
      config.headers.jwtAuthToken = token;
    } else {
      delete instance.defaults.headers.jwtAuthToken;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export default instance;
