import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Request, Response } from 'express';
import { mockXeroValidData, mockValidConvertedData } from './balance-sheet.mock';
import { getBalanceSheetController } from '../controllers/balance-sheet.controller';

const { mockGetBalanceSheet } = vi.hoisted(() => {
    return { mockGetBalanceSheet: vi.fn() }
})

vi.mock('../services/xero.service', () => ({
    getBalanceSheetService: mockGetBalanceSheet
}));

describe('Balance Sheet Controller', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockJson: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        mockJson = vi.fn();
        mockRequest = {};
        mockResponse = {
            json: mockJson,
            status: vi.fn().mockReturnThis(),
        };
        mockGetBalanceSheet.mockClear();
    });

    it('should transform xero data into a our format', async () => {
        mockGetBalanceSheet.mockResolvedValue(mockXeroValidData);
        await getBalanceSheetController(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockJson).toHaveBeenCalledWith({ ok: true, data: mockValidConvertedData });
    });

    it('should handle errors properly', async () => {
        mockGetBalanceSheet.mockRejectedValue(new Error('Service error'));
        await getBalanceSheetController(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockJson).toHaveBeenCalledWith({ ok: false, error: 'Failed to fetch balance sheet' });
    });
});