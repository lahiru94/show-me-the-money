export type ReportData = {
    reportTitle: string;
    headerRow: {cells: CellData[]};
    bodyRows: RowData[];
}

export type HeaderRowData = {
    cells: CellData[];
}

export type RowData = {
    rowType: RowType;
    cells: CellData[];
    key: string;
}

export type CellData = {
    value: string;
}

export enum RowType {
    MAIN_SECTION_ROW = 'MAIN_SECTION_ROW',
    SUB_SECTION_ROW = 'SUB_SECTION_ROW',
    ROW = 'ROW',
    SUMMARY_ROW = 'SUMMARY_ROW'
}
