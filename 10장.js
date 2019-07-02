/*////////////////////////////////
10장 객체
//////////////////////////////////
##########################
######1 객체란? ##########
##########################
객체는 키+값 으로 구성된 '프로퍼티'

프로퍼티의 값이 함수일경우, 함수와 구분하기 위해 '메소드'라 부름

객체는 데이터(프로퍼티)와 관련동작(메소드)를 모두 포함가능

상속을 위해 '프로토타입'이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다.

-프로퍼티
'프로퍼티 키' + '프로퍼티 값' 으로 구성
프로퍼티 키는 유일한 식별자이다. 문자열 or symbol 값으로 지정
프로퍼티 값: 모든 값
*/
/*##########################
######2.객체생성방법 ##########
##########################*/

// 1) 객체 리터럴 ' {  } ' 이용하여 객체만들기
var emptyObject={};
console.log(typeof emptyObject);

var person={
    name:'Lee',
    gender: 'male',
    sayHello: function(){
        console.log('Hi, My name is'+ this.name);
    }
};
console.log(typeof person);
console.log(person);

person.sayHello();


// 2) object 생성자 함수를 이용하여 객체만들기

/*생성자함수- 'new' 키워드로 객체를 생성
생성자함수를 통해서 생성된 객체를 인스턴스라고 함
리터럴 방식을 주로 이용하기 때문에 자주 이용하지는 않는다.*/

var person = new Object();

person.name= 'Lee';
person.gender= 'male';
person.sayHello= function(){
    console.log('Hi, My name is ' + this.name );
};
console.log(typeof person);
console.log(person);

person.sayHello();

//3) 생성자함수

var person1 ={
    name: 'Lee',
    gender: 'male',
    sayHello: function(){
        console.log('Hi my name is '+ this.name);
    }
};
var person2 ={
    name: 'Seo',
    gender: 'male',
    sayHello: function(){
        console.log('Hi my name is '+ this.name);
    }
};

//여러개 생성할 때 번거롭고 귀찮다. 따라서 생성자함수 이용

//생성자함수 먼저 생성
function Person(name,gender){
    this.name= name;
    this.male= gender;
    this.sayHello= function(){
        console.log('Hi my name is '+ this.name);
    };
}
//인스턴스 생성
var person1 = new Person('Lee','male');
var person2 = new Person('Song','female');

console.log('person1: ', typeof person1)
console.log('person2: ', typeof person2)
console.log('person1: ', person1)
console.log('person2: ', person2)

person1.sayHello();
person2.sayHello();

//생성자 함수 이름은 일반적으로 대문자로 시작한다 ex) Person
// this 는 생성자함수가 생성할 '인스턴스'를 가르킨다


/*##########################
######3.객체프로퍼티접근 ##########
##########################*/
//3.1) 프로퍼티 키
var person ={
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10,
    function: 1
};
console.log(person);
// 프로퍼티 키(ex) first-name, gender, ) 는 반드시 따옴표를 사용하여야 한다.

//3.2 프로퍼티 값 읽기

var person ={
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10,
    function: 1
};

console.log(person);

console.log(person.first-name);  //-NaN
console.log(person[first-name]);  // ReferenceError
console.log(person['first-name']); // O 'Ung-mo'

console.log(person.gender);  // O  'male'
console.log(person[gender]); // ReferenceError
console.log(person['gender']); // O 'male'

console.log(person.1); //Syntax Error
console.log(person[1]); // 10    (person[1]->person['1'] 자동변환)
console.log(person['1']); //10 

//즉 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 한다.

//3.3 프로퍼티 값 갱신
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };
  
  person['first-name'] = 'Kim';
  console.log(person['first-name'] ); // 'Kim'

  //3.4 프로퍼티 동적 생성  (객체가 소유하지 않은 프로퍼티 키에 값을 할당하면 주어진 키와 값으로 새로운 프로퍼티를 자동으로 생성하여 객체에 추가한다)
  var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };

  person.age=20;
  console.log(person.age);
  console.log(person); 

  //3.5 프로퍼티 삭제 (delete 연산자를 이용)
  var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };

 delete person.gender;
 console.log(person);
 //gender 삭제

 //3.6 for-in 문 (모든 프로퍼티에 대한 루프수행)
 var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };

  for (var prop in person){
      console.log(prop+ ': ' + person[prop]); }   //prop는 객체의 프로퍼티 이름이 반환되며 person[prop]는 각각의 값이 반환된다.
  

 var array = ['1입니다','2입니다'];

 //배열에도 사용가능하지만 순서가 보장되지 않기때문에 비추
 // 또한 배열이외의 추가요소들도 출력한다 -> for of 로 해결가능
 for (var index in array){
    console.log(index+': '+ array[index]);
 }


 /*####################################################
######4.Pass-by-reference & 5.Pass-by- value ##########
#######################################################*/

//객체는 프로퍼티를 변경,추가,삭제 가능한 변경가능(mutable)한 값이다.
// 객체의 참조값(address)로 저장,연결되는 방법 : pass-by-reference
// 객체의 값으로 저장,연결되는 방법 : pass-by-value

//ex) pass-by -reference -> foo 와 var는 같은 val:10 을 참조한다.
var foo = {
    val: 10
  }
  
  var bar = foo;
  console.log(foo.val, bar.val); // 10 10
  console.log(foo === bar);      // true
  
  bar.val = 20;
  console.log(foo.val, bar.val); // 20 20
  console.log(foo === bar);      // true


  // Pass-by-value
var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false


var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 10 1
console.log(a === b); // false

