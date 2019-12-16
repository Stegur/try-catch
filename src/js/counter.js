const counter = (num) => {
  if ((num).toString().toUpperCase().includes('0B')) {
    throw new Error('Аргумент является двоичным числом');
  }
  if ((num).toString().toUpperCase().includes('0X')) {
    throw new Error('Аргумент является шестнадцатеричным числом');
  }
  if ((num).toString()[0] === '0' && (num).toString()[1] <= 7) {
    throw new Error('Аргумент является восьмеричным числом');
  }
  if (parseInt(num, 10)) {
    return parseInt(num, 10);
  }
  throw new Error('Аргумент не является числом');
};

export default counter;
