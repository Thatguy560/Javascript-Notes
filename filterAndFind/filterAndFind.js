// Filter - Returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - Returns single instance (object), returns first match, if no match undefined.

const people = [
  { name: "Bob", age: 20, position: "Developer" },
  { name: "Peter", age: 25, position: "Designer" },
  { name: "Susie", age: 30, position: "the boss" },
  { name: "Anna", age: 35, position: "Intern" },
];

// filter

const youngPeople = people.filter((person) => {
  if (person.age < 30) {
    return person;
  }
});

console.log(youngPeople);

const developers = people.filter((person) => person.position === "Developer");
console.log(developers);

const peter = people.find((person) => person.name === "Peter");
console.log(peter);

const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

// find returns the first value
