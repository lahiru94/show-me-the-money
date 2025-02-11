import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/header';
import { CellData } from '../types/balanceSheetTypes';

describe('Header Component', () => {
    const mockCells: CellData[] = [
        { value: 'Column 1' },
        { value: 'Column 2' },
        { value: 'Column 3' }
    ];

    it('renders all header cells', () => {
        render(
            <table>
                <thead>
                    <Header cells={mockCells} />
                </thead>
            </table>
        );
        
        mockCells.forEach(cell => {
            expect(screen.getByText(cell.value).textContent).toContain(cell.value);
        });
    });

    it('applies correct classes to header cells', () => {
        render(
            <table>
                <thead>
                    <Header cells={mockCells} />
                </thead>
            </table>
        );
        
        const headerCells = screen.getAllByRole('columnheader');
        
        expect(headerCells[0].className).toContain('pl-8');
        expect(headerCells[0].className).not.toContain('text-right');
        
        headerCells.slice(1).forEach(cell => {
            expect(cell.className).toContain('pl-8 text-right');
        });
    });
});