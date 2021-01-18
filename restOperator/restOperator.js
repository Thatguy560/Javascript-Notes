// Gathers/collects items
// destructuring functions
// Placement important, careful with the same name
// Rest when declare function, spread when invoke the function

const fruits = ["apple", "orange", "lemon", "banana"];
const [first, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === "lemon");
console.log(specificFruit);

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

getAverage("Peter", 89, 76, 81, 100);
