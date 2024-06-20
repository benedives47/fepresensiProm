import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../constant/api-collection.constant";

const AXIOS_INSTANCE = axios.create({
  baseURL: BASE_URL,
});

const devLogger = (message) => {
  if (process.env["NEXT_PUBLIC_PRODUCTION"] !== "true") {
    console.log("message", message);
  }
};

// Request INTERCEPTOR
const onRequest = (config) => {
  const token = Cookies.get("act");
  const { method, url, headers } = config;

  headers["Authorization"] = `Bearer ${token}`;

  devLogger(`[API] : ${method?.toUpperCase()} ${url} | Request`);
  return config;
};

const onResponse = (response) => {
  const { method, url } = response.config;
  const { status } = response;

  devLogger(`[API] [${method?.toUpperCase()}]:  ${url} | Response ${status}`);
  return response;
};

const onErrorResponse = (error) => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config;
    const { statusText, status } = error.response ?? {};

    devLogger(
      `[API] : ${method?.toUpperCase()} ${url} | Error ${status} ${message} ${statusText}`
    );
  } else {
    devLogger(`[API] | Error ${error.message}`);
  }
  return Promise.reject(error);
};

const setupInterceptors = (AXIOS_INSTANCE) => {
  AXIOS_INSTANCE.interceptors.request.use(onRequest, onErrorResponse);
  AXIOS_INSTANCE.interceptors.response.use(onResponse, onErrorResponse);
  return AXIOS_INSTANCE;
};

export const REQUEST = setupInterceptors(AXIOS_INSTANCE);
