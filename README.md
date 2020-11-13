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

6. What is NaN property in JavaScript?

NaN property means "Not a Number" value. It indicates a value is not a legal number.

**typeof** of a NaN will return a **Number**.

To check if a value is NaN, we use the isNan() function.

isNaN("Hello") - Returns true
isNaN(345) - Returns false
isNaN("1") - Returns false - "1" is converted to a Number type which results in a 0.
isNaN(true) - Returns false - True is converted to a Number type that results in a 1 (A number).
isNaN(false) - Returns false
isNaN(undefined) - Returns true

7. Explain passed by value and passed by reference

var obj = { name: "Vivek", surname: "Bisht" };

var obj2 = obj;

In the above example, the assign operator, directly passes the location of the variable obj to the variable obj2. In other words, the reference of the variable obj is passed to the var obj2.

var obj = #8711; - obj pointing to address of { name: "Vivek", surname: "Bisht" }

var obj2 = obj;

var obj2 = #8711

// Changing the value of obj1

obj1.name = "Akki";
console.log(obj2);

This returns { name: "Vivek", surname: "Bisht" } since both the variables are pointing to the same address.

From the above example, we can see that while passing non-primitive data types, the assign operator directly passes the address (reference).

Therefore, non-primitive data types are always **Passed by reference**.

8. What is an 'Immediately Invoked' function in JavaScript?

**An Immediately Invoked Function (known as IIFE) is a function that runs as soon as it's defined**.

Syntax of IIFE: 

(function(){
  // Do something;
})();

A function runs only when it is invoked. If we do not invoke the function, the function declaration is returned: 

**In order to invoke the function we use the second set of parenthesis**

9. Explain Higher Order Functions in JavaScript.

**Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions**.

function higherOrder2() {
  return function() {
    return "Do something"; 
  }
}

var x = higherOrder2();
x() - Returns "Do something"

10. Explain "this" keyword.

The "this" keyword refers to the object that the function is a property of.

the value of "this" keyword will always depend on the object that is invoking the function.

**The "this" keyword refers to the object that the function is a property of**.

Example 1

var obj = {
  name: "Vivek", 
  getName: function(){
    console.log(this.name);
  }
}

obj.getName(); - Will return "Vivek"

Example 2 

var obj = {
  name: "Vivek",
  getName: function(){
    console.log(this.name);
  }
}

var getName = obj.getName;

var obj2 = { name: "Peter", getName };
obj2.getName(); - Will return "Peter"

Although the getName function is declared inside the object obj, at the time of invocation, getName() is a property of **obj2**, therefore the "this" keyword will refer to **obj2**.

11. Explain call(), apply() and bind() methods.

**call() - This method accepts arguments** 

It's a predefined method in Javascript.

This method invokes a method (function) by specifying the owner object.

Example:

function sayHello() {
  return "Hello" + this.name;
}

var obj = { name: "Sandy" };

sayHello.call(obj) - Returns "Hello Sandy"

Example 2: 

var person = {
  age: 25,
  getAge: function() {
    return this.age;
  }
}

var person2 = { age: 54 };
person.getAge.call(person2) - This will return 54

call() accepts arguments: 

function saySomething(message) {
  return this.name + "is" + message;
}

var person4 = { name: "John" };

saySomething.call(person4, "awesome" ) - This will return "John is awesome"

**apply()**





