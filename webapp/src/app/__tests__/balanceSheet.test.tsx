import { expect, test, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import BalanceSheet from '../components/balanceSheet'

const mockReportData = {
  reportTitle: 'Balance Sheet - Demo Org - As at 10 February 2025',
  headerRow: {
    cells: [
      { value: '', key: 'empty-cell' },
      { value: '10 February 2025', key: '10 February 2025' },
      { value: '11 February 2024', key: '11 February 2024' }
    ]
  },
  bodyRows: [
    {
      rowType: 'MAIN_SECTION_ROW', cells: [{ "value": "Assets" }], key: 'Assetstitle row'
    },
    {
      rowType: 'SUB_SECTION_ROW', cells: [{ "value": "Bank" }], key: 'Banktitle row'
    },
    {
      rowType: 'ROW', cells: [{ "value": "My Bank Account" }, { "value": "126.70" }, { "value": "99.60" }], key: 'BankMy Bank Account'
    }
  ]
};

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockReportData)
    }) as Promise<Response>
  );
});

test('renders balance sheet with correct title', async () => {
  render(await BalanceSheet({}));
  expect(screen.getByRole('heading', {
    level: 1,
    name: 'Balance Sheet - Demo Org - As at 10 February 2025'
  })).toBeDefined();
});

test('renders table with header and body', async () => {
  render(await BalanceSheet({}));

  // Check if the header is rendered
  expect(screen.getByText('10 February 2025')).toBeDefined();
  expect(screen.getByText('11 February 2024')).toBeDefined();

  // Check if body cells are rendered
  expect(screen.getByText('Assets')).toBeDefined();
  expect(screen.getByText('Bank')).toBeDefined();
  expect(screen.getByText('My Bank Account')).toBeDefined();
  expect(screen.getByText('126.7')).toBeDefined(); // numbers are formatted
  expect(screen.getByText('99.6')).toBeDefined(); // numbers are formatted
});

test('renders table with correct structure', async () => {
  render(await BalanceSheet({}));

  // Verify table exists
  const table = screen.getByRole('table');
  expect(table).toBeDefined();

  // Verify header structure
  const headerCells = screen.getAllByRole('columnheader');
  expect(headerCells).toHaveLength(3);
  expect(headerCells[0].textContent).toContain('');
  expect(headerCells[1].textContent).toContain('10 February 2025');
  expect(headerCells[2].textContent).toContain('11 February 2024');

  // Verify body structure and hierarchy
  const rows = screen.getAllByRole('row');
  expect(rows.length).toBeGreaterThan(1); // At least header + some data rows

  // Check main section row (Assets)
  const mainSectionRow = screen.getByText('Assets').closest('tr');
  const mainRowCells = mainSectionRow!.querySelectorAll('td');
  expect(mainRowCells).toHaveLength(1);

  // Check sub section row (Bank)
  const subSectionRow = screen.getByText('Bank').closest('tr');
  const subSectionRowCells = subSectionRow!.querySelectorAll('td');
  expect(subSectionRowCells).toHaveLength(1);

  // Check data row (My Bank Account)
  const dataRow = screen.getByText('My Bank Account').closest('tr');
  
  // Verify data row structure
  const dataCells = dataRow!.querySelectorAll('td');
  expect(dataCells).toHaveLength(3);
  expect(dataCells[0].textContent).toContain('My Bank Account');
  expect(dataCells[1].textContent).toContain('126.7');
  expect(dataCells[2].textContent).toContain('99.6');
});

test('calls fetch with correct URL', async () => {
  render(await BalanceSheet({}));
  expect(fetch).toHaveBeenCalledWith('http://localhost:3002/api/balance-sheet');
  expect(fetch).toHaveBeenCalledTimes(1);
});