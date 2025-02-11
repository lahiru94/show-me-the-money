import { describe, it, expect, vi } from 'vitest';
import { getBalanceSheetService, xeroAxiosHandler } from '../services/xero.service';

describe('Xero Service', () => {
    it('should return balance sheet data when request is successful', async () => {
        const mockResponse = {
            data: {
                Reports: [{
                    id: 'BalanceSheet',
                    name: 'Balance Sheet'
                }]
            }
        };
        vi.spyOn(xeroAxiosHandler, 'get').mockResolvedValue(mockResponse);
        const result = await getBalanceSheetService();
        expect(result).toEqual(mockResponse.data.Reports[0]);
    });

    it('should throw an error when request fails', async () => {
        const errorMessage = 'Network Error';
        vi.spyOn(xeroAxiosHandler, 'get').mockRejectedValue(new Error(errorMessage));
        await expect(getBalanceSheetService()).rejects.toThrow(
            `${errorMessage}`
        );
    });

    it('should throw an error when response is invalid', async () => {
        const errorMessage = 'Invalid Xero response';
        vi.spyOn(xeroAxiosHandler, 'get').mockResolvedValue({
            data: { Reports: [] }
        });
        await expect(getBalanceSheetService()).rejects.toThrow(errorMessage);
    });
});