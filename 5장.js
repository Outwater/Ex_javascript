var x;
x = 6;

var str = 'Hello world';
3 + 2
console.log('str')

var x = 50000;
var y = 6;
var z = x + y;

console.log(z);


// 함수
function myFunction(x, y) {
  return x + y;
}

// if 문
if (x > 0) {
  // do something
}

// for 문
for (var i = 0; i < 10; i++) {
  // do something
}

var time = 10;
var greeting;

if (time < 10) {
  greeting = 'Good morning';
} else if (time < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}

console.log(greeting);

5 * 10 > 10

function square(number) {
  return number * number;
}

console.log(square(2))

var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', gender: 'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee
console.log(person.name);

var arr = [1, 2, 3, 4, 5];
console.log(arr[0]);


var str = 'string';
// 문자열은 유사배열이다.
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}