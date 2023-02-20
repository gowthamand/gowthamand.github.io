

1
console.log([...["Gowthaman"]]);
2
console.log(typeof 3 + 4 + "5" );
3
console.log(typeof (3 + 4 + + "5"));
4
function getInfo(member){
	member.name = "Anil";
}
const person = {name: "Sara"};
getInfo(person);
console.log(person);
5
function car(){
	this.make = "tata";
	return {make: "Kia"};
}
const myCar = new car();
console.log(myCar.make);
6
(()=> {
	let x = (y = 10);
})();
console.log(typeof x);
7
(()=> {
	let x = y = 10;
})();
console.log(typeof y);
8
'use strict';
(() => {
  let x = y = 10;
})();
console.log(typeof y);
9
console.log(!true - true);
console.log(true + + "10");
console.log(+true);
console.log(typeof +true);
console.log(typeof typeof true);
console.log(!"Test");
console.log(!!"Test");
10
let a = 3;
let b = Number(3);
console.log(a == b);
console.log(a === b);
11
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
12
var a = [1, 2, 3, 4, 5, 6];
a[5] = a;
console.log(a);
13
const person = {name: "Gowthaman"};
function sayHi(age) {
	return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 10));
console.log(sayHi.bind(person, 20));
14
function sayHi() {
	return (() => 0);
	or
	return () => 0;
}
console.log(sayHi());
15
var answer = 31 && 22 || 1 && 20;
console.log(answer)
16
const array = ['This', 'is', 'an', 'array', 'join', 'hack'];
console.log(`Wow!!! ${array}`);
17
let z = [1,2,3,4,5];
console.log(...z);
18
console.log(typeof NaN);
19
let data = 10 - -10;
console.log(data);
20
let data = {name : "Gowthaman"}
console.log(delete data.name);
console.log(data);
21
const data = ["Peter","Anil", "Sara"];
const [x] = data;
const [,y] = data;
console.log(x);
console.log(y);
22
const = {name: "Gowtham"};
const {name} = data;
console.log(name);
23
const result_ = false || {} || "";
const result__ = null || false || "";
const result_1 = [] || 0 || true;
const result = null || "" || false;
console.log(result_);
console.log(result__);
console.log(result_1);
console.log(result);
24
console.log(`${(x => x)('i love')} india`)
25
const name = 'code step by step';
console.log(typeof name === "object");
console.log(typeof name === "string");
console.log(!typeof name === "object");
console.log(!typeof name === "string");
26
let person = {name: "Gowtham"};
Object.seal(person);
person.age = 10;
person.name = "New"
console.log(person);
27
let c = 3 ** 3;
console.log(c)
28
let a = 2;
setTimeout( () => {
	console.log(a);
}, 0);
a = 100;
29
let a = "link";
let b = `link`;
console.log(a === b);
30
undefined vs not defined
31
let data = 3 + 4 + "5";
console.log(data);
console.log(typeof data);
console.log(typeof 3 + 4 + "5");
32
let str = "Hello, How are you";
console.log(str.replace(/H/g,"h"));
33
var number = 10;
var display = function() {
  console.log(number);
  var number = 20;
}
display();

34
let person = {
  name: 'John',
  toString: function () {
    return '25';
  },
  valueOf: function () {
    return '30';
  },
};

console.log(+person);

35
var arrowElement = a => b => c => (a + b + c);
console.log(curry(5)(4)(3))


String.raw

mixins

thunk

prevent promises swallowing errors

dense and sparse arrays?


h1 {
  color: red;
}

pre {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  font-size: 14px;
  padding: 14px;
}
