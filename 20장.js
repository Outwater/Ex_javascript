/*###################################
#### 20. 객체지향 프로그래밍######################
####################################*/


1.객체지향 프로그래밍 개요
//객체지향프로그래밍은 실세계의 객체를 소프트웨어의 세계에서 표현하기 위해
//객체의 핵심적인 개념과 기능만을 추출(추상화)하여 모델링하는 것을 의미한다.
//즉, 우리가 실세계에서 사물을 인지하는 방식을 프로그래밍에 접목하려는 사상을 의미한다.


//객체는 메세지를 주고받고, 데이터를 처리하는 각각의 역할이나 책임을 갖는 작은 독립적인 기계or부품으로 볼 수 있다


2. 클래스 기반 vs 프로토타입 기반

2.1클래스 기반

/* 클래스 기반 언어(Java , C++ , c# , Python ,..)는 클래스로 객체의 자료구조와 기능을 정의하고 
                                                            생성자를 통해 인스턴스를 생성한다

클래스란 같은 종류의 집단에 속하는 '속성(attribute)' 과 '행위(Behavior)'를 정의한 것으로 객체지향프로그램의 기본적인 사용자정의데이터형 이다.
즉 클래스는 객체 생성에 사용되는 패턴,청사진(bluepoint),붕어빵틀일 뿐이며 new 연산자를 통해 인스턴스화 과정이 필요하다.

모든 인스턴스는 오직 클래스에서 정의된 범위 내에서만 작동하며, 런타임에 그 구조를 변경할 수 없다.
이 특징(불변성)은 정확성,안정성,예측성 측면에서 클래스기반언어가 프로토타입 기반 언어보다 더 나은 결과를 보장한다.


*/

2.2 프로토타입 기반 언어

/*
js는 멀티-패러다임 언어로 명령형+함수형+프로토타입기반 객체지향 언어이다.
js는 클래스(붕어빵틀) 개념이 없고, 별도의 객체 생성 방법이 존재한다.

1.객체리터럴                2.Object() 생성자 함수           3.생성자함수

var obj1 = { };             var obj1= new Object();         funtion F(){}
obj1.name = 'Seo';          obj2.name = 'Seo';              var obj3 = new F();
                                                            obj3.name = 'Seo';

js는 이미 생성된 인스턴스의 자료구조와 기능을 동적으로 변경할 수 있다는 특징이 있다.
객체지향의 특징인 상속과 캡슐화(정보은닉)의 개념은 프로토타입 체인과 클로저 등으로 구현 가능하다.

*/

3. 생성자 함수와 인스턴스의 생성

/*
js는 생성자함수와 new연산자를 통해 인스턴스를 생성할 수 있다.
생성자함수는 클래스이자 생성자의 역할을 한다.
*/

3.1 문제가 많은 이름생성 예제

function Person(name){ //생성자 함수
    this.name = name; //프로퍼티
    this.setName = function(name){   //이름등록 메소드
        this.name=name;
    };
    this.getName = function(){       //이름출력 메소드
        return this.name;
    };
}

//인스턴스 생성하기(by 생성자함수)
var A1 = new Person('Seo');
console.log(A1.getName());  // Seo

//이름 수정 메소드 호출
A1.setName('Song');
console.log(A1.getName()); //Song


//이 방식의 문제점 ( 중복이 많다 => 그 해결로 4.프로토타입 방식 도입)
var A1 = new Person('Lee');
var A2 = new Person('Kim');
var A3 = new Person('choi');

console.log(A1);
console.log(A2);
console.log(A3);

//Person { name: 'Lee', setName: [Function], getName: [Function] }
//Person { name: 'Kim', setName: [Function], getName: [Function] }
//Person { name: 'choi', setName: [Function], getName: [Function] }
//각각이 메소드(setName과 getName)를 소유함으로 메모리 낭비발생


4. 프로토타입 체인과 메소드의 정의

/*모든 객체는 '프로토타입'이라는 다른 객체를 가르키는 내부 링크를 가지고 있다.
즉 프로토타입을 통해 직접 객체를 연결할 수 있는데 이를 프로토타입 체인 이라고 한다.

