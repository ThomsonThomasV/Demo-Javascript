import { formatCurrency } from '../../Scripts/utils/money.js';

describe('Test Suit: FormatCurrency', () => {
  it('Converts cents into Dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('Works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
  describe('Rounding', () => {
    it('Rounds Up to the nearest Cent(1)', () => {
      expect(formatCurrency(2000.5)).toEqual('20.01');
    });
    it('Rounds Up to the nearest Cent(2)', () => {
      expect(formatCurrency(2000.4)).toEqual('20.00');
    });
  });
});
