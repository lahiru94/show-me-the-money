import { CellData } from "../types/balanceSheetTypes";

interface HeaderProps {
    cells: CellData[];
}

const getHeaderCellClass = (index: number): string => {
    let classString: string = "pl-8"
    if (index > 0) {
        classString += " text-right"
    }
    return classString
}

const Header: React.FC<HeaderProps> = ({ cells }) => {
    return (
        <tr>
            {cells.map((cell, index) => (
                <th
                    className={getHeaderCellClass(index)}
                    key={cell.value}
                >
                    {cell.value}
                </th>
            ))}
        </tr>
    );
};

export default Header;