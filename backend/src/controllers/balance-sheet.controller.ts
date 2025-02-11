import { Request, Response } from 'express';
import { getBalanceSheetService } from '../services/xero.service';
import { SourceData, SourceDataSection, SourceDataRow, RowType, ReportData, HeaderRow, Row } from '../types/balance-sheet.types';

export const getBalanceSheetController = async (req: Request, res: Response) => {
    try {
        const sourceData: SourceData = await getBalanceSheetService();
        // Transform Xero data to a table friendly format
        const reportTitle: string = extractReportTitle(sourceData);
        const headerRow: HeaderRow = extractHeaderRow(sourceData);
        const bodyRows: Row[] = extractBodyRows(sourceData);
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

const extractHeaderRow = (sourceData: SourceData): HeaderRow => {
    return { cells: sourceData.Rows[0].Cells.map(cell => ({ value: cell.Value })) };
}

const extractBodyRows = (sourceData: SourceData): Row[] => {
    return flattenSectionData(sourceData.Rows.slice(1));
}

const extractReportTitle = (sourceData: SourceData): string => {
    return sourceData.ReportTitles.join(" - ");
}

const flattenSectionData = (sections: SourceDataSection[]): Row[] => {
    const flatRows: Row[] = [];

    sections.forEach(section => {
        if (section.Title) {
            flatRows.push(processSection(section));
        }
        if (section.Rows) {
            section.Rows.forEach(row => {
                flatRows.push(processRow(section.Title, row));
            });
        }
    });
    return flatRows;
}

const processSection = (section: SourceDataSection): Row => {
    return {
        rowType: section.Rows?.length === 0 ? RowType.MAIN_SECTION_ROW : RowType.SUB_SECTION_ROW,
        cells: [{ value: section.Title }],
        key: section.Title + "title row"
    }
}

const processRow = (sectionTitle: string, row: SourceDataRow): Row => {
    const rowMapping: { [key: string]: RowType } = {
        'Row': RowType.ROW,
        'SummaryRow': RowType.SUMMARY_ROW,
    };
    return {
        rowType: rowMapping[row.RowType],
        cells: row.Cells.map(cell => ({ value: cell.Value })),
        key: sectionTitle + row.Cells[0]?.Value
    };
}




