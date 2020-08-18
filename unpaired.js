const array = [];

const unpaired = (array) => {
  const number = array.reduce((acumulador, atual) => acumulador ^ atual, null);

  return number
    ? `The unpaired number is ${number}`
    : "Either the array is empty or it has no unpaired element";
};

console.log(unpaired(array));
