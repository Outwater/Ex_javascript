/*///////////////////////////*
9장 타입변환과 단축평가
*///////////////////////////////////

// 의도적 타입변환 = 명시적타입변환 or 타입캐스팅
// js엔진에 의해 자동변환 => 암묵적타입변환 or 타입강제변환(coercion)
   

var x = 10;
var str = x+'';
console.log(typeof str,str); //string,10
console.log(x)               // 10
//자동으로 str이 문자열속성으로 coercion 됐다.

//1.문자열타입으로의 coercion
0+''
~~+ ''

//2.숫자타입으로의 coercion
//연산자 있을 경우 암묵적타입변환
1-'1' //0
1*'10' //10
1/'one' //NaN (피연산자가 숫자타입으로 변경이 안되므로 산술연산 수행불가=>NaN)

+'10'
+true


//3.의도적 타입변환
//1)문자열로 변환
console.log(String(1));
console.log(String(true));

console.log((1).toString()); //1
console.log((true).toString());
console.log(typeof((1).toString())); //string

console.log(1+'');
console.log(true+'');

//2)숫자타입으로 변환

console.log(Number('0'));
console.log(Number(true));

console.log(parseInt('0'));
//문자열->숫자만 가능

console.log(+'0');  //0
console.log('0'* 1);//0
console.log(+true);//1
console.log(true*1);//1

///////단축평가(short-circuit)
//대부분의 연산자는 오른쪽에서 왼쪽으로 평가가 진행된다.(?)
