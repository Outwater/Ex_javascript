/*###################################
#### 16. Strict mode ################
####################################*/

// js 문법을 보다 엄격히 적용하여 잠재적 오류까지 방지하는 모드

// 전역이 아니라 필요한 부분에 'use strict'; 입력
// 코드의 '선두'(첫부분)에 입력해야함
'use strict';
function foo(){
    x=10;
    console.log(x);
}
foo(); //Reference Error


//5. Strict mode 가 발생시키는(잡아내는) Error

//5.1 암묵적 전역변수(선언하지 않는 변수를 Error처리함)
(function () {
    'use strict';
  
    x = 1;
    console.log(x); // ReferenceError: x is not defined
  }());
 
//5.2 변수, 함수, 매개변수의 삭제
(function () {
    'use strict';
  
    var x = 1;
    delete x;  //Syntax Error
    
    function foo(a) {
      delete a; //Syntax Error
    }
    delete foo; //Syntax Error
  }());

//5.3 매개변수 이름의 중복
(function () {
    'use strict';
      //SyntaxError: Duplicate parameter name not allowed in this context
    function foo(x, x) {
      return x + x;
    }
    console.log(foo(1, 2));
  }());

  //5.4 일반함수의 this //??무슨소리인지.....?;;
  (function () {
    'use strict';
  
    function foo() {
      console.log(this); // undefined
    }
    foo();
  
    function Foo() {
      console.log(this); // Foo
    }
    new Foo();
  }());