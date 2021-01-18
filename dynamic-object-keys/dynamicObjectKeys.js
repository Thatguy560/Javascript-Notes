const person = {
  name: "john,",
};

console.log(person.name); // John
person.age = 25;
console.log(person); // { name: "john", age: 25 }

console.log(person["name"]); // John

let appState = "loading";
appState = "error";
const keyName = "computer";
const app = {
  [appState]: true,
};

app[keyName] = "apple";
console.log(app); // { error: true, computer: 'apple' }

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "Peter");
updateState("job", "Developer");

console.log(state); // { loading: true, name: "Peter", job: "Developer"}
