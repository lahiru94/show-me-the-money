import { RowType, CellData } from "../types/balanceSheetTypes";

interface RowProps {
    rowType: RowType;
    cells: CellData[];
}

const formatNumber = (number: string): string => {
    const parsedNum = parseFloat(number);
    if (isNaN(parsedNum)) return number;
    return parsedNum.toLocaleString("en-US");
};

const getRowClass = (rowType: RowType): string => {
    let classString: string = "";
    switch (rowType) {
        case RowType.MAIN_SECTION_ROW:
            classString = "font-bold";
            break;
        case RowType.SUB_SECTION_ROW:
            classString = "font-semibold";
            break;
        case RowType.SUMMARY_ROW:
            classString = "ml-4";
            break;
        case RowType.ROW:
            classString = "ml-4";
            break;
        default:
            break;
    }
    return classString;
};

const getCellClass = (cellIndex: number, rowType: RowType): string => {
    let classString: string = "";
    if (cellIndex === 0) {
        if (rowType === RowType.ROW || rowType === RowType.SUMMARY_ROW) {
            classString = "pl-4";
        } else if (rowType === RowType.SUB_SECTION_ROW) {
            classString = "pl-2";
        }
    } else {
        classString += " text-right";
        if (rowType === RowType.SUMMARY_ROW) {
            classString += " border-t border-b border-gray-200";
        }
    }
    if (rowType === RowType.MAIN_SECTION_ROW) {
        classString += " pt-8";
    } else if (rowType === RowType.SUB_SECTION_ROW) {
        classString += " pt-4";
    }
    return classString;
};

const getColSpan = (rowType: RowType): number => {
    if (rowType === RowType.MAIN_SECTION_ROW || rowType === RowType.SUB_SECTION_ROW) {
        return 3;
    } else {
        return 1;
    }
};

const Row: React.FC<RowProps> = ({ rowType, cells }) => {

    return (
        <tr className={getRowClass(rowType)}>
            {cells.map((cell, cellIndex) => (
                <td
                    key={cellIndex}
                    colSpan={getColSpan(rowType)}
                    className={getCellClass(cellIndex, rowType)}>
                    {formatNumber(cell.value)}
                </td>
            ))}
        </tr>
    );
};

export default Row;