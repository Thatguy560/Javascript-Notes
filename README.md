# Javascript Notes

## Sources

https://www.youtube.com/watch?v=WZQc7RUAg18&t=121s - Old JS Vs ES6
https://scrimba.com/p/p4Mrt9/cWV4JUb - Introduction to ES6

https://www.interviewbit.com/javascript-interview-questions/?fbclid=IwAR2OehZmE0GFK8e6pZYm1YfiLBA8OI0ufoblOlV4lZ5UtbZVDRCWkQaP7mA#implicit-type-coercion - JavaScript Interview Questions

https://www.guru99.com/javascript-interview-questions-answers.html?fbclid=IwAR2OehZmE0GFK8e6pZYm1YfiLBA8OI0ufoblOlV4lZ5UtbZVDRCWkQaP7mA - Top 85 JavaScript Interview Questions & Answers

## Contents

[Old-Javascript](#Old-Javascript)

[ES6](#ES6)

[JavaScript-Interview-Questions](#JavaScript-Interview-Questions)

[Basic-JS-Interview-Questions](#Basic-JS-Interview-Questions)

[Advanced-JS-Interview-Questions](#Advanced-JS-Interview-Questions)

# Old Javascript

## Variables

```Javascript
var names = ["Peter", "John"];

var counter = 10;

counter = 5;

console.log(counter); ----> 5 (Variable has been redeclared)

var counter = 5;

function sayName() {
  var name = "Peter";
  console.log(name);
}

sayName(); --> Calling function at the end.
```

## String Concatenation

```Javascript
var name = "Ed";

console.log("Hello my name is" + name);
```

## Object Literals

```Javascript
function getBook(title, author){
  return {
    title: title,
    author: author
  };
}

var book = getBook("Harry Potter", "JK");
console.log(book);
```

## Object de-construction

```Javascript
var user = {
  name: "Peter",
  age:  24
}

var myName = user.name
console.log(myName) -----> will return Peter
```

## Functions (before arrow functions)

```Javascript
function sayName(){
  console.log("Hello I am Peter");
}

var sayAge = function(){
  console.log("My age is 25");
}

sayName()
sayAge()
```

## This Keyword

```Javascript
var user = {
  name: "Peter",
  age: 25,
  sayName: function() {
    console.log("My name is " + this.name);
    var fullName = function() {
      console.log("My name is " + this.name + "and my age is " + this.age);
    };
    fullName();
  }
};

user.sayName();

// 'this' refers to the object.
```

## Event Listener

```Javascript
button.addEventListener('click', function() {
  var addFade = function() {
    this.style.display = "None";
  }
});
```

## Default Parameters

```Javascript
function multiply(x, y){
    var a = x || 1;
    var b = y || 1;
  console.log(x*y);
}

multiply(5, 10);
```

## Array

```Javascript
var shoppingList = ["Milk", "Pie", "Eggs", "Garlic Bread"]

shoppingList.forEach(function(product){
  console.log(product)
})
```

## Constructor Function (A function that lets us create an object)

```Javascript
function Person(name, age, hairColour){
  this.name = name;
  this.age = age;
  this.hairColour = hairColour;
}

Person.prototype.sayName = function() {
  console.log("My name is " + this.name);
}

function Peter(occupation, hobbies, name, age, hairColour) {
  Person.call(this, name,age,hairColour)
  this.occupation = occupation;
  this.hobbies = hobbies;
}

Peter.prototype = Object.create(Person.prototype);

const person = new Peter("Dev", "Games", "Peter", "24", "Blonde")

person.sayName();

var Peter = new Person("Peter", 24, "Blonde")

Peter.sayName();
```

## Promises

```Javascript
function getData(data, callback){
  setTimeout(() => {
    console.log("Reading from the database");
    callback({data: data})
  }, 2000);
}

getData(5, function(data){
    console.log(data);
});

// Promise -> operation that finishes in the future
```

# ES6

## Variables

```Javascript
const todoList = ["Milk", "Cow"]

let counter = 10;

counter = 5;

// Const means we can't redeclare variable

// Always use Const and whenever you want to re-assign the value of a variable use let.
```

```Javascript
const list = [1, 2, 3, 4, 5];

for(let i = 0; i < list.length; i++) {
  console.log(i);
}

// let and const are block scoped
```

## String Concatenation

```Javascript
const name = "Peter";
const age = 24

console.log(`Hello my name is ${name} and my age is ${age}`);

// the ${name} won't work without a backtick, can't use normal quotation marks
```

## Object Literals

```Javascript
function getBook(title, author){
  return {
    title,
    author
  };
}

let book = getBook("Harry Potter", "JK");
console.log(book);
```

## Object de-construction

```Javascript
const user = {
  name: "Peter",
  age:  24
};

const {name, age} = user;

console.log(name);
```

## Functions (before arrow functions)

```Javascript
 sayName = () => {
  console.log("Hello I am Peter");
}

const sayAge = (location) => {
  console.log(``"My age is 25"``)
};

const sayLocation = (location) => {
  console.log(`my location is ${location}`)
};

sayName()
sayAge()
sayLocation("Paris")
```

## This Keyword

```Javascript
const user = {
  name: "Peter",
  age: 25,
  sayName: function(){
    console.log("My name is " + this.name);
    const fullName = () => {
      console.log(`My name is ${this.name} and my age is ${this.age}`);
    };
    fullName();
  }
};

user.sayName();
```

## Event Listener

```Javascript
button.addEventListener('click', function() {
  let addFade = () => {
    this.style.display = "None";
  }
});
```

## Default Parameters

```Javascript
const add = (c = 4, d = 4) => {
  console.log(c + d);
};

add(20, 10);

// Setting c and d defaults to 4 if we don't pass in any arguments.
```

## Array

## For Each

```Javascript
const shoppingList = ["Milk", "Pie", "Eggs", "Garlic Bread"]

shoppingList.forEach((product) => {
  console.log(product)
})
```

```Javascript
const shoppingList = ["Milk", "Pie", "Eggs", "Garlic Bread"]

shoppingList.forEach((product, index) => {
  console.log(`The index is ${index} and the product is ${product}.`)
})
```

```Javascript
const newlist = ["Milk", "Pie", "Eggs", "Garlic Bread"]

shoppingList.forEach((product, index) => {
  console.log(`The index is ${index} and the product is ${product}.`)
})
```

## Map

```Javascript
const shoppingList = ["Milk", "Pie", "Eggs", "Garlic Bread"];

const newList = shoppingList.map(item => {
  return item;
});

console.log(newList)
```

## Filter

```Javascript
const filterList = shoppingList.filter(item => item === "Eggs")

console.log(filterList)
```

## Constructor Function

```Javascript
class ShoppingList {
  constructor(items, number,){
    this.items = items;
    this.number = number;
  }
  sayList(){
    console.log(this.items);
  }
}

class Product extends ShoppingList {
  constructor(items, number, amount, cost) {
    super(items, number)
    this.amount = amount;
    this.cost = cost;
  }
}

const product = new Product(["Redbull", "Chocolate", "Candy"], 3, 2, 20)

product.sayList();

// extends allows an object to inherits properties from another object

// super binds thse properties to constructor function
```

## Promises

```Javascript
const prom = new Promise((resolve, reject) => {
  // Here is async
  setTimeout(() => {
      resolve({user: "Peter", pass: "testpassword"});
  }, 2000);
});

prom.then(data => {
  console.log(data);
});


const prom = new Promise((resolve, reject) => {
  // Here is async
  setTimeout(() => {
      reject(new Error("Something went wrong"));
  }, 2000);
});

prom.then(data => {
  console.log(data);
})
.catch(err => console.log(err));

// Promise -> operation that finishes in the future
```



## Classes

```Javascript
class Animal {
  constructor(type, legs){
    this.type = type
    this.legs = legs
  }

  makeNoise(sound = "Loud"){ // Default params
    console.log(sound);
  }

  static return10() {
    return 10
  }
}

console.log(Animal.return10());

// constructor -> assigning values to your class

// create new instance of class using e.g.

let cat = new Animal('cat', 4)

// if we then wanted to change a value we could do

cat.legs = 3;
cat.makeNoise('Meow');
console.log(cat.metaData)
```


## Get Method
```Javascript

get metaData() {
  return `Type: ${this.type}, Legs: ${this.legs}`
}
```

# JavaScript Interview Questions

## Basic JS Interview Questions

1. What are the different data types present in Javascript

**String** - Represents a series of characters and is written with quotes. Can be represented using single or double quotes.

var str = "Peter";

**Number** - Represents a number and can be written with or without decimals.

var x = 3;
var y = 3.6;

**BigInt** - This data type is used to store numbers which are above the limitation of the Number data type.

var bigInteger = 234567890123456789012345678901234567890;

**Boolean** - Represents a logical entity and can have two values: true or false. Booleans are generally used for conditional testing.

**Undefined** - When a variable is declared but not assigned, it has the value of undefined and it's type is also undefined.

var x - Value of x is undefined

**Null** - It represents a non-existent or invalid value.

var z = null;

**Symbol** - It is a new data type introduced in the ES6 version of JavaScript. 

var symbol1 = Symbol('symbol');

**typeof** - Primitive Types:

typeof "Peter" - Returns "String"
typeof 3.14 - Returns "Number"
typeof true - Returns "Boolean"
typeof 234567890123456789012345678901234567890n - Returns "bigint"
typeof undefined - Returns "undefined"
typeof null - Returns "object"
typeof Symbol ('symbol') - Returns Symbol

**Non-Primitive Types** - Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.

var obj1 = {
  x: 43
  y: "Hello World!",
  z: function(){
    return this.x;
  }
}

2. Explain Hoisting in JavaScript.

Hoisting is a default behaviour of JavaScript where all the variable and function declarations are moved on top.

This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

hoistedFunction();

function hoistedFunction() {
  console.log("Hello World!");
}

**Note - Variable initializations are not hoisted, only variable declarations are hoisted:**

var x;
console.log(x);
x = 23;

**Note - To avoid hoisting, you can run JavaScript in strict mode by using "use strict" on top of the code:**

"use strict";

3. Difference between "==" and "===" operators.

Both are comparison operators. The difference between both operators is that "==" is used to compare values, whereas "===" is used to compare both value and data types.

2 == "2" - Returns True
2 === "2" - Returns False

4. Explain implicit Type Coercion in JavaScript.

Implicit type coercion in JavaScript is automatic conversion of value from one data type to antoher. It takes place when the operands of an expression are of a different data types.

var x = 3;
var y = "3"
x + y - Returns "33" 

var x = 24;
var y = "Hello";
x + y - Returns "24Hello";

5. Is JavaScript a statically typed or a dynamically typed language?

JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during **run-time** in contrast to a statically typed language, where the type of variable is checked during **compile-time**.

**Static typing**

- Variables have types
- Values have types
- Variables cannot change type

**Dynamic typing**

- Variables have no types
- Values have types 
- Variables change type dynamically

Since JavaScript is a loosely(dynamically) typed language, variables in JS are not associated with any type. A variable can hold the value of any data type. For example, a variable which is assigned a number type can be converted to a string type.

var a = 23;
var a = "Hello World"





