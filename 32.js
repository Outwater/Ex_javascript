/*################################################################
#### 32. 이벤트  ########### #########################
##########################################################*/

1. Introduction
/* '이벤트(event)'란 어떤 사건을 의미한다. 브라우저는 이벤트를 감지할 수 있고
이벤트가 발생 시에 이를 통지해준다. 이러한 과정을 통해 사용자와 웹페이지는 상호작용할 수 있다.

'이벤트 헨들러'는 이벤트가 발생하기 전에는 실행되지 않다가 이벤트가 발생하면 실행되는 함수를
의미한다.

*/


2. 이벤트 루프(Event Loop)와 동시성(Concurrency)

/*
브라우저는 '단일 쓰레드'와 '이벤트 드리븐' 방식으로 동작한다

'단일쓰레드'는 쓰레드가 하나 뿐이라는 의미이며, 곧 하나의 작업만을 처리할 수 있다는 것이다.
하지만 실제로 웹 어플리케이션은 많은 task가 동시에 처리되는 것처럼 느껴지는데,
이처럼 자바스크립트의 동시성(Concurrency)를 지원하는 것이 바로 '이벤트루프'이다

대부분의 자바스크립트 엔진은 크게 2개의 영역으로 나뉜다.
1. Call Stack (호출스택)             
=> 요청된 작업들이 순차적으로 쌓이고 실행되는 장소
=> js는 단 하나의 Call Stack을 사용하므로 단 하나의 task만 실행가능하다. 

2.Heap
=> 동적으로 생성된 객체 인스턴스가 할당되는 영역이다.

3.Event Queue(Task Queue)
=> 비동기 처리 함수의 콜백함수, 비동기식 이벤트 핸들러, Timer함수 (setTiomeout(), setInterval())의 콜백함수가 보관되는
영역으로 이벤트루프에 의해 특정시점(Call Stack이 비어졌을 때)에 순차적으로 Call Stack으로 이동되어 실행된다.

4.Event Loop(이벤트루프)
Call Stack 내에서 현재 실행중인 task가 있는지 그리고 Event Queue에 task가 있는지 반복하여 확인한다.
Call Stack이 비어있다면 Event Queue내의 task 가 Call Stack으로 이동되어 실행된다.


*/

3. 이벤트의 종류

3.1 UI Event
load    웹페이지 로드가 완료시
unload  웹페이지가 언로드될 때(새로운페이지 요청할 경우)
error   브라우저가 오류를 만나거나 요청자원이 존재하지 않을때
resize  브라우저 창의 크기를 조절했을 때
scroll  사용자가 페이지를 위아래로 스크롤할 때
select  텍스트를 선택했을 때

3.2 Keyboard Event
keydown  키를 누르고 있을 때
key up   누르고 있던 키를 뗄 때
keypress 키를 누구로 땟을 때

3.3 Mouse Event
click
dbclick
mousedown
mouseup
mousemove
mouseover
mouseout

3.4 Focus Event
focus/focusin  요소거 포커스를 얻었을 때
blur/foucusout 요소가 포커스를 잃었을 때

3.5 Form Event
input 
change  선택,체크,라디오버튼의 상태가 변경되었을 때
submit  form을 제출할 때( 버튼or 키)
reset  -reset버튼 클릭시(요즘 사용x)


4 이벤트 핸들러 등록
이벤트가 발생했을 때 동작할 이벤트 핸들러를 이벤트에 등록하는 방법은 다음 3가지이다.

4.1. 인라인 이벤트 핸들러 방식
 => 요즘 사용 x -> 사용하면 안됨 
 => HTML과 JS가 섞여있다.

4.2 이벤트 핸들러 프로퍼티 방식
 => 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만을 바인딩할 수 있는 단점이 있다.Concurrency

 //ex)
 const btn = document.querySelector('.btn');
 btn.onclick = function(){
     alert('1번버튼'); //실행되지 않는다.(두번째 핸들러가 바인딩되기때문에)
 };

 btn.onclick = function(){
     alert('2번버튼')
 };  // '2번버튼' 출력

 4.3 addEventListener 메소드 방식

=> DOM 요소에 이벤트를 바인딩하고 해당 이벤트가 발생했을 때 실행될 콜백함수를 지정한다.
=> 이 방법은 하나의 이벤트에 대해 여러개의 이벤트 핸들러를 추가할 수 있다.
또한 캡처링과 버블링을 지원하며, HTML 뿐만아니라 모든 DOM요소(HTML,XML,SVG)에서 동작한다.

//ex)
btn.addEventListener('click',function(){
    alert('1번버튼');
})
btn.addEventListener('click',function(){
    alert('2번버튼')
});

//ex 
//32장(이벤트).html 파일참고


5. 이벤트 핸들러 함수 내부의 this

5.1 인라인 이벤트 핸들러 방식

=> 인라인 이벤트 핸들러방식에서는 이벤트 핸들러가 일반 함수로서 호출된다.
=> 따라서 이밴트 핸들러 내부의 this 는 전역 객체 window를 가리킨다.


5.2 이벤트 핸들러 프로퍼티 방식
=> 이 방식에서 이벤트 핸들러는 '메소드' 이므로 이벤트 핸들러 내부의
this 는 '이벤트에 바인딩된 요소'를 가리킨다. 이것은 이벤트 객체의 currentTarget 프로퍼티 와같다

5.3 addEventListener 메소드 방식

=> 이 방식에서 이벤트 핸들러는 '콜백함수'이지만 이벤트 핸들러 내부의 this는
이벤트 리스너에 바인딩된요소(currentTarget)을 가르킨다.


6. 이벤트의 흐름

HTML 요소에서 이벤트가 발생할 경우 연쇄적 반응이 일어난다. 즉 이벤트가 전파되는데,
전파 방향에 따라 버블링(Event Bubbling)과 캡처링(Evenet Capturing)으로 구분할 수 있다.

버블링: 자식요소에서 발생한 이벤트가 부모요소로 전파되는것( 자식->부모)
캡처링: 자식요소에서 발생한 이벤트가 부모요소로 부터 시작하여 
        이벤트를 발생시킨 자식요소까지 도달하는 것 (부모->자식)
**) 버블링과 캡처링은 항상 같이 발생하며, 캡처링부터 시작하여 버블링으로 종료된다.


=> 버블링&캡쳐링 잘 모르겠다. 일단 Pass

7.Event 객체

=> 이벤트가 발생하면 event 객체가 동적으로 생성되며, 이벤트를 처리할 수 있는 이벤트 핸들러 인자로 전달된다.

ex)클릭한 곳의 좌표 표시

function showCoords(e){  //e: event object
    const msg = document.querySelector('.message');
    msg.innerHTML = 
    'clientX value: ' +e.clientX + '<br>' +
    'clientY value: ' +e.clientY ;
}
addEventListener('click',showCoords);
// 이벤트핸들러를 선언할 때 event 객체를 전달받을 첫번째 매개변수를 명시적으로 선언해야한다.
// 여기서는 e라는 이름의 매개변수를 지정하여 사용하였다.



7.1 Event Property

7.1.1 Event.target
/*
<body>
  <div class="container">
    <button id="btn1">Hide me 1</button>
    <button id="btn2">Hide me 2</button>
  </div>

  <script>
    function hide(e) {
      e.target.style.visibility = 'hidden';
      // 동일하게 동작한다.
      // this.style.visibility = 'hidden';
    }

    document.getElementById('btn1').addEventListener('click', hide);
    document.getElementById('btn2').addEventListener('click', hide);
  </script>
</body>
*/







