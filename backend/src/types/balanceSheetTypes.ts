export type SourceData = {
    ReportTitles: string[];
    Rows: SourceDataSection[];
}

export type SourceDataSection = {
    Title: string;
    RowType: string;
    Rows: SourceDataRow[];
    Cells: SourceDataCell[];
}

export type SourceDataRow = {
    RowType: string;
    Cells: SourceDataCell[];
}

export type SourceDataCell = {
    Value: string;
}

export enum RowType {
    ROW = 'ROW',
    SUMMARY_ROW = 'SUMMARY_ROW',
    MAIN_SECTION_ROW = 'MAIN_SECTION_ROW',
    SUB_SECTION_ROW = 'SUB_SECTION_ROW'
}

export type ReportData = {
    reportTitle: string;
    headerRow: {cells: Cell[]};
    bodyRows: Row[];
}

export type HeaderRow = {
    cells: Cell[];
}

export type Row = {
    rowType: RowType;
    cells: Cell[];
    key: string;
}

export type Cell = {
    value: string;
}
