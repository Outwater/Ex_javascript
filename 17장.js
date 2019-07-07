/*###################################
#### 17. This ########
####################################*/


function square(number) {
    console.log(arguments);
    console.log(this);

    return number*number
}
square(2);

//함수 호출하는 방식
1)함수 호출 2)메소드 호출 )생성자함수 호출 4)  apply/ call/ bind 호출

var foo = function(){
    console.dir(this);
};

//1.함수 호출
//foo();

//2 메소드 호출
//var obj = { foo: foo};
//obj.foo();

//3. 생성자 함수 호출
var instance = new foo();

//4. apply/call/bind 호출
var bar = {name: 'bar'};
foo.call(bar);
foo.apply(bar);
foo.bind(bar)();

/*###################################
#### 17.1  함수호출 ########
####################################*/
//browser에서 최상위 객체는 window  ,  Server(node)에서는 glbal

var ga = 'Global variable';

console.log(ga);
console.log(window.ga); //? Reference Error

function foo(){
    console.log('invoked!');
}
window.foo();

//? this 는 전역객체에 바인딩된다.
function foo(){
    console.log("foo's this: ", this);
    
    function bar(){
        console.log("bar's this: ", this);
    }
    bar();
}
foo();

//어렵고만..
//https://blueshw.github.io/2018/03/12/this/
//참고하여해결