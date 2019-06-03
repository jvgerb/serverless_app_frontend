const currency = require('../../src/components/Filters/Utils').default;

describe('Test if numbers are fitered correctly', () => {
  it('has the function currency', () => {
    expect(typeof currency)
      .toBe('function');
  });

  it('should display three decimals places for MWh filter', () => {
    const retval = currency(3.141526, '', 3, { thousandsSeparator: '.', decimalSeparator: ',' });
    expect(retval)
      .toBe('3,142');
  });

  it('should display two decimals places and EUR prefix', () => {
    const retval = currency(23.4200000000000031, 'EUR', 2, { thousandsSeparator: '.', decimalSeparator: ',' });
    expect(retval)
      .toBe('EUR23,42');
  });

  it('should display two decimals with a dot for thousands Seperator ', () => {
    const retval = currency(14123.123456600012, '', 2, { thousandsSeparator: '.', decimalSeparator: ',' });
    expect(retval)
      .toBe('14.123,12');
  });

  it('should display no decimal place ', () => {
    const retval = currency(12, '', 0, { thousandsSeparator: '.', decimalSeparator: ',' });
    expect(retval)
      .toBe('12');
  });
});
