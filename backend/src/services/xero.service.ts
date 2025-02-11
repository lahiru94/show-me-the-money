import axios, { AxiosInstance } from 'axios';
import { axiosConfig } from '../config/xero.config';
import { SourceData } from '../types/balance-sheet.types';

export const xeroAxiosHandler: AxiosInstance = axios.create(axiosConfig);

export const getBalanceSheetService = async (): Promise<SourceData> => {
    try {
        const response = await xeroAxiosHandler.get('/api.xro/2.0/Reports/BalanceSheet');
        if (!response.data?.Reports?.[0]) {
            throw new Error('Invalid Xero response');
        }
        return response.data.Reports[0];
    } catch (error) {
        throw error;
    }
};