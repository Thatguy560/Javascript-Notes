// Reduce
// Iterates callback function
// Reduces to a single value, number, array, object
// 1st parameter ('acc') - total of all calculations
// 2st parameter ('curr') - current iteration/value

const staff = [
  { name: "bob", age: 20, position: "developer", salary: 100 },
  { name: "peter", age: 25, position: "designer", salary: 300 },
  { name: "susie", age: 30, position: "boss", salary: 400 },
  { name: "anna", age: 35, position: "intern", salary: 10 },
];

const totalSalary = staff.reduce((total, person) => {
  console.log(total);
  console.log(person.salary);
  return (total += person.salary);
}, 0); // 0 is the initial value given

console.log(totalSalary);
