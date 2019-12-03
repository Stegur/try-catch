import counter from '../counter';

describe('counter', () => {
  it('should return number', () => {
    const num = 10;

    const result = counter(num);

    expect(result).toBe(num);
  });

  it('should convert string to number', () => {
    const num = '10 штук';

    const result = counter(num);

    expect(result).toBe(10);
  });

  it('should return false', () => {
    const result = counter('some');

    expect(result).toBeFalsy();
  });
});
