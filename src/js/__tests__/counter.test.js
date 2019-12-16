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

  it('should throw Error Аргумент не является числом', () => {
    expect(() => { counter('some'); }).toThrow(new Error('Аргумент не является числом'));
  });

  it('should throw Error Аргумент является шестнадцатеричным числом', () => {
    expect(() => { counter('0xFFFFFFFFFFFFFFFFF'); }).toThrow(new Error('Аргумент является шестнадцатеричным числом'));
  });

  it('should throw Error Аргумент является двоичным числом', () => {
    expect(() => { counter('0B00000000011111111111111111111111'); }).toThrow(new Error('Аргумент является двоичным числом'));
  });

  it('should throw Error Аргумент является восьмеричным числом', () => {
    expect(() => { counter('0755'); }).toThrow(new Error('Аргумент является восьмеричным числом'));
  });

  it('should return 511', () => {
    const result = counter('0855');
    expect(result).toBe(855);
  });
});
