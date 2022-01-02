import axios from "axios";

export const PROD = "PRODUCTION";

export const QA = "QA";
export const DEV = "DEVELOPMENT";
export let ENV;
export const LOCAL = "LOCAL";

axios.defaults.headers.post["Content-Type"] = "application/json";
const instance = axios.create({
  baseURL: `${window.location.protocol}//`
});
instance.all = axios.all;
instance.spread = axios.spread;

axios.interceptors.request.use(config => {
  const token = `Bearer test`;
  config.headers.Authorization = token;
  return config;
});

instance.interceptors.request.use(config => {
  const token = `Bearer test`;
  config.headers.Authorization = token;
  return config;
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default instance;
