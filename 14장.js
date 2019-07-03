/*###################################
##### 14.Prototyoe 프로토타입 ########
####################################*/


 /*###############################
######//1.프로토타입 객체##########
#################################*/

/* 모든 객체는 자신의 부모역할을 하는 객체와 연결되어있다. (상속과유사)
따라서 부모 객체의 프로퍼티(or메소드)를 상속받아 사용 가능하다.
이 때 부모 객체를 '프로토타입 객체(프로토타입)' 이라고 한다. */

var student = {
    name: 'Lee',
    score: 90
};
console.log(student.hasOwnProperty('name'))
//true
console.dir(student);

console.log(student.__proto__==Object.prototype);


/*##################################################
#2. [[Prototype]] (인터널슬롯) vs prototype 프로퍼티##
####################################################*/

//*모두 프로토타입 객체를 가리키지만 관점의 차이 존재

function Person(name){
    this.name=name;
}
var foo = new Person('Lee');

console.dir(Person); //prototype 프로퍼티가 있다. (this.name)
console.dir(foo);

console.log(Person.__proto__==Function.prototype);
console.log(Person.prototype== foo.__proto__)
// 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체를 가르킨다.

console.log(Person.__proto__, foo.__proto__);

/*#############################
#### 3. constructor 프로퍼티####
##############################*/
function Person(name){
    this.name=name;
}
var foo = new Person('Lee');
console.log(Person.prototype.constructor==Person);
//Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person() 이다.
//true
console.log(foo.constructor==Person);
//foo 객체를 생성한 객체는 Person() 생성자함수이다.
//true
console.log(Person.constructor==Function);
//Person을 생성한 객체는 Function() 생성자함수이다
//true

/*##############################
#### 4. Prototype chain ########
##############################*/


/*자바스크립트는 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 
해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면
[[Prototype]]이 가리키는 링크를 따라 자신의 부모 역할을 하는
프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다. 
이것을 프로토타입 체인이라 한다. */
var student = {
    name: 'Lee',
    score: 90
  }
  console.dir(student);
  console.log(student.hasOwnProperty('name')); // true
  console.log(student.__proto__ === Object.prototype); // true
  console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true
//student에는 hasOwnProperty 메소드가 없기 때문에 프로토타입 객체(Object.prototype)의 메소드를 호출하였다.

// 4.1) 프로토타입 체인(*객체리터럴방식으로 생선된 객체)
var Person={
    name: 'Lee',
    gender: 'male',
    sayHello: function(){
        console.log('Hi my name is '+ this.name);
    }
};
//객체리터럴 방식으로 객체 생성
console.dir(Person);
//밑에 4가지 사진참고할 것.
console.log(person.__proto__ === Object.prototype);   // ① true
console.log(Object.prototype.constructor === Object); // ② true
console.log(Object.__proto__ === Function.prototype); // ③ true
console.log(Function.prototype.__proto__ === Object.prototype); // ④ true
//.**결론 : 결론적으로 객체 리터럴을 사용하여 객체를 생성한 경우, 그 객체의 프로토타입 객체는 Object.prototype이다

// 4.2) 프로토타입 체인 (**생성자 함수로 생성된 객체)

//생성자 함수를 정의하는 방식 => 1.함수선언식, 2.함수표현식, 3.Function()
//1.함수선언식
var square = function square(number){
    return number*number;
}
//2.함수표현식
var square = function (number){
    return number*number;
}
//3가지 방식 전부 Function() 생성자를 통해 함수 객체생성
//따라서 모든 함수객체의 prototype객체는 Function.prototype 이다.

function Person(name,gender){
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log('Hi my name is '+ this.name);
    };
}
var foo = new Person('Lee','male');

console.dir(Person);
console.dir(foo);

//밑에 것 그림과 함께 확인해보기 찬찬히
console.log(foo.__proto__ === Person.prototype);                // ① true
console.log(Person.prototype.__proto__ === Object.prototype);   // ② true
console.log(Person.prototype.constructor === Person);           // ③ true
console.log(Person.__proto__ === Function.prototype);           // ④ true
console.log(Function.prototype.__proto__ === Object.prototype); // ⑤ true
//


/*###################################
#### 5. Prototype 객체의 확장 ########
####################################*/
//그림으로 보면 이해 편함
function Person(name){
    this.name= name;
}
var foo = new Person('Lee');

Person.prototype.sayHello = function(){
    console.log('Hi my name is '+ this.name);
}
foo.sayHello();
// Hi my name is Lee

/*#############################
#### 6. 원시타입의 확장 ########
##############################*/

//원시타입은 프로퍼티나 메소드를 직접 추가할 수는 없지만 
//원시타입의 프로토타입 객체 ~~.prototype 에 메소드를 추가함으로써
//원시타입과 객체 모두 메소드를 사용할 수 있다.
var str = 'test'; //원시타입
str.mymethod = function(){
    console.log('str.myMethod');
};  //선언은 되지만 실행은 안된다.
str.mymethod(); //Type error

//따라서 str의 생성자함수이자 프로토타입인 String()의 String.prototype에 새로운 메소드를 추가하여 준다.
var str= 'test';
String.prototype.mymethod = function(){
    return('myMethod');
};

console.log(str.mymethod()); //myMethod
console.log('stringe'.mymethod()); //myMethod
//String.prototype 에 메소드를 추가하였으므로 모든 String()이 만든 문자열에 사용가능
console.dir(String.prototype);

/*###################################
#### 7. Prototype 객체의 변경 ########
####################################*/
function Person(name){
    this.name= name;
}

var foo = new Person('Lee');

Person.prototype={ gender: 'male'}

var bar = new Person('Kim');

console.log(foo.gender); //undefined
console.log(bar.gender); // 'male'

console.log(foo.constructor); //Person()
console.log(bar.constructor); // Object()...?

//8. 프로토타입 체인 동작조건

// => 객체의 프로퍼티가 우선이고 없을 경우 프로토타입체인 작동한다.
//예제 확인.
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.gender = 'male'; // ①
  
  var foo = new Person('Lee');
  var bar = new Person('Kim');
  
  console.log(foo.gender); // ① 'male'
  console.log(bar.gender); // ① 'male'
  
  // 1. foo 객체에 gender 프로퍼티가 없으면 프로퍼티 동적 추가
  // 2. foo 객체에 gender 프로퍼티가 있으면 해당 프로퍼티에 값 할당
  foo.gender = 'female';   // ②
  
  console.log(foo.gender); // ② 'female'
  console.log(bar.gender); // ① 'male'








