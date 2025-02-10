import axios, { AxiosInstance } from 'axios';
import { axiosConfig } from '../config/xero.config';

export const xeroAxiosHandler: AxiosInstance = axios.create(axiosConfig);

export const getBalanceSheetService = async () => {
    try {   
        const response = await xeroAxiosHandler.get('/api.xro/2.0/Reports/BalanceSheet');
        return response.data.Reports[0];
    } catch (error) {
        throw error;
    }
};