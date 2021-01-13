//주석

//데이터타입( boolean,null, undefined, number, string, symbol)
//+객체타입 (object)


//문자열의 변경불가능성 (객체타입x)
var str = 'string';
console.log(str); // string

str = 'String';
console.log(str); // String 으로 뜨지만 string이 대체되는 건아님

// 문자열 붙히기
str += ' test';
console.log(str); // String test

//슬라이싱 가능
str = str.substring(0, 3);

//test
console.log(str); // Str

abc = str.toUpperCase();
console.log(abc); // STR


// 변수 먼저 설정 시 undefined 타입
var 변수먼저선언;
console.log(변수먼저선언); // undefined

//typeof 타입이 무엇인지 보는 함수
var foo = 321;
console.log(typeof foo);  //number

//symbol 타입은 key를 지정하는 타입