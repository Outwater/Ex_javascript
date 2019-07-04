/*###################################
#### 15. 스코프 ######################
####################################*/


var x = 'global';
function foo(){
    var x = 'function scope';
    console.log(x);
}

foo();
console.log(x);
// 전역변수 x 와 함수 foo 내부의 x 가 존재한다.

// *식별자는 자신이 어디에서 선언됐는지에 의해 
//자신이 유효한(다른 코드가 자신을 참조할 수 있는) 범위를 갖는다.
// '전역 스코프'  와  '지역 스코프'

//let을 이용한 블록 레벨 스코프 
let y =0;
{
    let y= 100;
    console.log(y); //100
}
console.log(y); //0


/*###################################
#### 4. 전역스코프 ##################
####################################*/

var global = 'global';

function foo(){
    var local = 'local';
    console.log(global); //global
    console.log(local); //local
}
foo();

console.log(global); //global
console.log(local); //Reference Error

// *js 는 블록레벨스코프(x) 함수레벨스코프(o)
if(true){
    var x =5;
}
console.log(x); //5 (x는 전연변수)

var a = 10;
(function(){
    var b = 20;   //b는 지역변수
});
console.log(a); // 10 (전역변수)
console.log(b); // b is not defined


// 우선순위는 지역변수 > 전역변수
var x = 'global';
function foo() {
  var x = 'local';
  console.log(x);
}

foo();          // local (지역변수 먼저 참조)
console.log(x); // global

//####*함수 내에 존재하는 함수(내부함수의 참조)
var x = 'global';
function foo(){
    var x ='local';    //지역변수 선언이다.
    console.log(x);
    
    function bar(){
        console.log(x);
    }
    bar();           // *local (가까운 )   
}
foo();               // local
console.log(x);      // global


// 전역변수 값의 변경
var x = 10;
function foo() {
  x = 100;         // ** var x 가아님을 주의 (함수 영역에서 전역변수의 값을 변경할 수 있다.)
  console.log(x);
}
foo();
console.log(x); // **100  (함수내에서 x=100으로 변경)

//중첩스코프는 가장 인접한 지역을 우선 참조
var x = 10;

function foo(){
    var x = 100;
    console.log(x);  // 100 (지역변수로 설정) 

  function bar(){   // 내부함수
    x = 1000;
    console.log(x); // 1000 (가장가까운 x 참조) 
  }
  bar();
}
foo();
console.log(x); // ? 10 

//ex
var foo = function(){
    var a =3, b=5;
    var bar = function(){
        var b = 7, c=11 ;   
    
        a+= b+c;    // 여기서 a=3,b=7, c=11 이고 a= 21로 바뀜
    };  //내부함수 종료
         
    bar(); //이 때 a=21 b=5 c= not defined 
    console.log(a);
};
foo(); //21


///7.렉시컬 스코프 (함수를 어디에 선언하였는가로 스코프를 결정-js)

var x =1;
function foo(){
     var x =10;     //if var x =10 이 x= 10 이라면 
    bar();
}

function bar(){
    console.log(x);     //선언시 스코프결정 -> x=1
}
foo();  //1          // 10 이출력
bar();  //1

// *함수를 어디에서 호출하였는지는 스코프 결정에 아무런 의미를 주지 않는다

// *전역변수의 사용은 최대한 지양하고 지역변수(스코프가적은)의 사용을 권장
// MYAPP 으로 전역변수 객체를 만들거나 즉시실행한수를 이용하여 전역변수 사용을 억제한다.
