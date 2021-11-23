const addToBatch = (array, number) => {
  if (array.length <= 5) {
    return array.concat(number);
  }
  return array;
};

// console.log(addToBatch([1,2,3,4], 5))
// console.log(addToBatch([], 8))
// console.log(addToBatch([1, 2, 3, 4, 5, 6], 7))

const checkLength = (number) => {
  return number.length <= 10;
};

const filterLongNumbers = (phone_numbers) => {
  return phone_numbers.filter(checkLength);
};

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
  ['Anna', 50],
  ['Laura', 40],
  ['Josh', 30],
  ['Min', 50],
  ['Karla', 60]
];

const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(nad => {
    return `Hi ${nad[0]}! ${nad[1]}% off our best candies for you today!`
  });
};

console.log(generateMessages(namesAndDiscounts));
