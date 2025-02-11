import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Row from '../components/row';
import { RowType } from '../types/balanceSheetTypes';

describe('Row Component', () => {
    it('renders main section row correctly', () => {
        const { container } = render(
            <table>
                <tbody>
                    <Row
                        rowType={RowType.MAIN_SECTION_ROW}
                        cells={[{ value: '1000' }]}
                    />
                </tbody>
            </table>

        );
        const row = container.querySelector('tr');
        const cell = container.querySelector('td');

        expect(row?.className).toContain('font-bold');
        expect(cell?.className).toContain('pt-8');
        expect(cell?.colSpan.toString()).toContain('3');
    });

    it('formats numbers correctly', () => {
        const { container } = render(
            <table>
                <tbody>
                    <Row
                        rowType={RowType.ROW}
                        cells={[{ value: '1000000.50' }]}
                    />
                </tbody>
            </table>

        );
        const cell = container.querySelector('td');
        expect(cell?.textContent).toBe('1,000,000.5');
    });

    it('handles non-numeric values', () => {
        const { container } = render(
            <table>
                <tbody>
                    <Row
                        rowType={RowType.ROW}
                        cells={[{ value: 'N/A' }]}
                    />
                </tbody>
            </table>
        );
        const cell = container.querySelector('td');
        expect(cell?.textContent).toBe('N/A');
    });

    it('renders row with three cells correctly', () => {
        const { container } = render(
            <table>
                <tbody>
                    <Row
                        rowType={RowType.ROW}
                        cells={[
                            { value: 'Test Label' },
                            { value: '1000000' },
                            { value: '2000000' }
                        ]}
                    />
                </tbody>
            </table>
        );
        const cells = container.querySelectorAll('td');

        expect(cells).toHaveLength(3);
        expect(cells[0].className).toContain('pl-4');
        expect(cells[0].textContent).toBe('Test Label');
        expect(cells[0].colSpan.toString()).toContain('1');
        expect(cells[1].className).toContain('text-right');
        expect(cells[1].textContent).toBe('1,000,000');
        expect(cells[1].colSpan.toString()).toContain('1');
        expect(cells[2].className).toContain('text-right');
        expect(cells[2].textContent).toBe('2,000,000');
        expect(cells[2].colSpan.toString()).toContain('1');
    });

    it('applies correct classes for summary row', () => {
        const { container } = render(
            <table>
                <tbody>
                    <Row
                        rowType={RowType.SUMMARY_ROW}
                        cells={[
                            { value: 'Total' },
                            { value: '2000' },
                            { value: '3000' }
                        ]}
                    /></tbody>
            </table>
        );
        const cells = container.querySelectorAll('td');
        expect(cells[0].className).toContain('pl-4');
        expect(cells[1].className).toContain('text-right border-t border-b border-gray-200');
        expect(cells[2].className).toContain('text-right border-t border-b border-gray-200');
    });
});