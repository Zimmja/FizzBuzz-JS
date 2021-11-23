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

// console.log(generateMessages(namesAndDiscounts));

const candies = [['Aero', 1.99], ['Skitties', 2.99], ['Maltesers', 3.49], ['Mars', 1.49], ['Skittles', 1.49], ['Starburst', 5.99], ['Ricola', 1.99], ['Polkagris', 5.99], ['Pastila', 4.99], ['Mentos', 8.99], ['Raffaello', 7.99], ['Gummi bears', 10.99], ['Fraise Tagada', 5.99]];

const searchCandies = (search, maxPrice) => {
  matchedNames = candies.filter(candy => searchFilter(search, candy[0]));
  matchedPrice = matchedNames.filter(candy => candy[1] <= maxPrice);
  return matchedPrice.map(candy => candy[0]);
};

const searchFilter = (search, candy) => {
  return candy.toLowerCase().startsWith(search.toLowerCase());
};

console.log(searchCandies("Ma", 10));
console.log(searchCandies("Ma", 2));
console.log(searchCandies("S", 10));
console.log(searchCandies("S", 4));
console.log(searchCandies("ma", 10));