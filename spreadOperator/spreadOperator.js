// Allows and iterable to spread/expand individually insider reciever
// Split into single items and COPY them

const udemy = "udemy";
const letters = [...udemy];
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// Spread operator copies values
const newFriends = [...friends];
console.log(newFriends);

const person = { name: "john", job: "developer" };

const newPerson = { ...person, city: "London", name: "Peter" };
console.log(person);
console.log(newPerson);
