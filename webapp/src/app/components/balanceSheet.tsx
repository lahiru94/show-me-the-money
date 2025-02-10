import { ReportData, HeaderRowData, RowData } from '../types/balanceSheetTypes';
import { ReportResponseData } from '../types/commonTypes';
import Header from './header';
import Row from './row';
import BalanceSheetError from './balanceSheetError';
const BalanceSheet: React.FC = async () => {
    const response = await fetch('http://host.docker.internal:3002/api/balance-sheet');
    if(!response.ok) {
        return <BalanceSheetError/>;
    }
    const responseData:ReportResponseData = await response.json();
    const reportData: ReportData = responseData.data;
    const reportTitle: string = reportData.reportTitle;
    const headerRow: HeaderRowData = reportData.headerRow;
    const bodyRows: RowData[] = reportData.bodyRows;
    return (
        <div>
            <h1 className='w-100 flex justify-center mt-4 text-lg font-bold underline'>{reportTitle}</h1>
            <table className='table-auto mt-16' data-testid='balance-sheet-table'>
                <thead>
                    <Header cells={headerRow.cells} />
                </thead>
                <tbody>
                    {bodyRows.map((row) => (
                        <Row rowType={row.rowType} cells={row.cells} key={row.key} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BalanceSheet;