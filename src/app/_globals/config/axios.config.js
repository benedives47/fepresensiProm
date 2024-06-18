import { decryptString } from "@/jobs-helper/decipher.helper";
import { ECookies } from "@/jobs-type/configuration/cookies.type";
import axios from "axios";
import Cookies from "js-cookie";

const AXIOS_INSTANCE = axios.create({
  baseURL: process.env["NEXT_PUBLIC_BASE_URL"],
});

const devLogger = (message) => {
  if (process.env["NEXT_PUBLIC_PRODUCTION"] !== "true") {
    console.log("message", message);
  }
};

// Request INTERCEPTOR
const onRequest = (config) => {
  let token = Cookies.get(ECookies.ENCRYPTED_JWT);
  const { method, url, headers } = config;

  if (token) {
    token = decryptString(token);
    headers["Authorization"] = `Bearer ${token}`;
  }

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
