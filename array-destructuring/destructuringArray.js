// faster/easier way to access/unpack variables from arrays, objects.

const fruits = ["orange", "apple", "banana"];
const friends = ["Joe", "Kurt", "Anna"];

let first = "bob";
let second = "john";

// let temp = second
// second = first
// first = temp

[second, first] = [first, second];

console.log(first, second); // John bub
