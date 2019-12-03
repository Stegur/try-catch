const counter = (num) => {
  try {
    if (typeof num === 'number') {
      return num;
    }
    if ((parseInt(num, 10))) {
      return parseInt(num, 10);
    }
    throw new Error('Аргумент не является числом');
  } catch (e) {
    console.error(e);
  }
  return false;
};

export default counter;
