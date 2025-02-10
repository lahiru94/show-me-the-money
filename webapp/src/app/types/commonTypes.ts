import { ReportData } from "./balanceSheetTypes";

export interface ResponseData{
    ok: boolean;
    status: number;
    data: object;
};

export interface ReportResponseData extends ResponseData{
    data: ReportData;
};