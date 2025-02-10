import { AxiosRequestConfig } from "axios";

export const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.XERO_SERVICE_URL || 'http://localhost:3000',
};
