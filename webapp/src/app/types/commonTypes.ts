import { ReportData } from "./balanceSheetTypes";

export interface ResponseData{
    ok: boolean;
    status: number;
    data: any;
};

export interface ReportResponseData extends ResponseData{
    data: ReportData;
};