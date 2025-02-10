import { Request, Response } from 'express';
import { getBalanceSheetService } from '../services/xero.service';
import { SourceData, SourceDataSection, RowType, ReportData, HeaderRow, Row } from '../types/balanceSheetTypes';

function flattenSectionData(sections: SourceDataSection[]): Row[] {
    const flatRows: Row[] = [];
    const rowMapping: { [key: string]: RowType } = {
        'Row': RowType.ROW,
        'SummaryRow': RowType.SUMMARY_ROW,
    };

    sections.forEach(section => {
        if (section.Title) {
            flatRows.push({
                rowType: section.Rows?.length === 0 ? RowType.MAIN_SECTION_ROW : RowType.SUB_SECTION_ROW,
                cells: [{ value: section.Title }],
                key: section.Title + "title row"
            });
        }
        if (section.Rows) {
            section.Rows.forEach(row => {
                flatRows.push({
                    rowType: rowMapping[row.RowType],
                    cells: row.Cells.map(cell => ({ value: cell.Value })),
                    key: section.Title + row.Cells[0]?.Value
                });
            });
        }
    });
    return flatRows;
}

export const getBalanceSheetController = async (req: Request, res: Response) => {
    try {
        const sourceData: SourceData = await getBalanceSheetService();
        // Transform Xero data to a table friendly format
        const reportTitle: string = sourceData.ReportTitles.join(" - ");
        const headerRow: HeaderRow = { cells: sourceData.Rows[0].Cells.map(cell => ({ value: cell.Value })) };
        const bodyRows: Row[] = flattenSectionData(sourceData.Rows.slice(1));
        const reportData: ReportData = {
            reportTitle,
            headerRow,
            bodyRows
        };
        res.status(200).json({ ok: true, data: reportData });
    } catch (error) {
        res.status(500).json({ ok: false, error: 'Failed to fetch balance sheet' });
    }
};
