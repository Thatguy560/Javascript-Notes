// Faster/easier way to unpack variables from objects

const bob = {
  first: "bob",
  last: "sanders",
  city: "london",
  siblings: {
    brother: "James",
  },
};

const firstName = bob.first;
const secondName = bob.last;
const siblings = bob.siblings.brother;

console.log(firstName, secondName, siblings);

const last = "some value";
const { last: shakeAndBake, first, city, zip } = bob;
console.log(first, last, city, zip, shakeAndBake);

function printPerson({ first, last, city, siblings: { brother } }) {
  console.log(first, last, brother);
}

printPerson(bob);
