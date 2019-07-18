/*###################################
#### 30. DOM #########################
####################################*/

1. DOM => Document Object Model

/*
DOM은 웹문서를 브라우저가 이해할 수 있는 구조로 구성하는 것

* 모든 요소와 속성 텍스트를 객체로 만들고, 이러한 객체들을 부자 관계로 표현하는
트리구조로 구성한 것. 
* 모든 DOM은 js를 통해 동적으로 변경할 수 있다.

#DOM API (Application Programming Interface)
-> 정적인 웹에 접근하여 동적인 웹으로 변경하기 위한 프로퍼티와 메소드의 집합

*/

2. DOM tree

/*
DOM tree 는 문서의 객체(모든요소)들을 트리구조로 표현한 것
#4종류의 노드로 구성
 * 문서노드 => tree의 최상위에 존재; DOM tree의 시작점 
 * 요소노드 => HTML 요소를 표현하며, 부자 관계를 통해 정보를 구조화한다.
 (Element Node)=> 어트리뷰트, 텍스트 노드에 접근하려면 먼저 요소노드를 찾아 접근해야한다.

 *어트리뷰트 노드 => HTML요소의 속성을 표현한다.
 *텍스트 노드 => HTML요소의 텍스트를 표현한다.
*/

3. DOM Query/ Traversing (요소에의 접근)

3.1 하나의 요소 노드 선택
// # document.getElementById(id)
const elem = document.getElementById('one');
elem.className= 'blue';

console.log(elem); //<li id="one" class = "blue">Seoul</li>

// # document.querySelector(cssSelector)
const elem = document.querySelector('li.red');
elem.className = 'blue';  //클래스 어트리뷰트의 값을 변경한다

3.2 여러개의 요소노드 선택

// #1 document.getElementsByClassName(class)

const elems = document.getElementsByClassName('red');

for (let i =0 ; i<elems.length; i++){
    elems[i].className = 'blue';
}

//실행시 오류가 발생한다.(1,3만 blue로 바뀜)
// 실시간으로 상태를 반영하므로 loop가 한 번돌고 상태가 변경된다.
// 루프시의 굉장한 주의가 필요하다
// => 따라서 반복문을 역방향으로 돌려서 해결해본다.

const elems = document.getElementsByClassName('red');

for (let i = elems.length - 1; i >= 0; i--) {
  elems[i].className = 'blue';
}

// while문을 통해 elems의 요소가 없을 때까지 실행도 가능
const elems = document.getElementsByClassName('red');

let i = 0;
while (elems.length > i) { // elems에 요소가 남아 있지 않을 때까지 무한반복
  elems[i].className = 'blue';
  // i++;
}

// HTMLCollection을 배열로 변경한다. **이방법 권장 **
const elems = document.getElementsByClassName('red');

// 유사 배열 객체인 HTMLCollection을 배열로 변환한다.
// 배열로 변환된 HTMLCollection은 더 이상 live하지 않다.
console.log([...elems]); // [li#one.red, li#two.red, li#three.red]

[...elems].forEach(elem => elem.className = 'blue');

// #2 document.getElementsByTagName(tagName)
   // 태그명으로 요소 노드를 모두 선택한다. 
   // Return: HTMLCollection (live)
   const elems = document.getElementsByTagName('li');

   [...elems].forEach(elem => elem.className = 'blue');

// #3 document.querySelectorAll(selector)
    // 지정된 CSS선택자를 사용하여 요소 노드를 모두 선택한다
    // Return : NodeList (non-live**)
    const elems = document.querySelectorAll('li.red');

    [...elems].forEach(elem => elem.className = 'blue');





3.3 DOM traversing (탐색)

  // #1 parentNode
    // 부모노드를 탐색한다.
    // Return: HTMLElement 를 상속받은 객체
    const elem = document.querySelector('#two');

    elem.parentNode.className = 'blue';

 // #2 firstChild, lastChild
    //자식노드를 탐색한다.   
    // Return: HTMLElement 를 상속받은 객체
    const elem = document.querySelector('ul');

    elem.firstChild.className = 'blue';
    elem.lastChild.className = 'blue';
    // 요소사이의 공백을 텍스트노드로 취급하여 동작하지 않는다. 공백제거나 JQuery 사용해야함
    // 혹은 firstElementChild , lastElementChild 사용

// #3 hasChildNodes() , childNodes ,  children

const elem = document.querySelector('ul');

if (elem.hasChildNodes()) {
  console.log(elem.childNodes);
  // 텍스트 요소를 포함한 모든 자식 요소를 반환한다.
  // NodeList(9) [text, li#one.red, text, li#two.red, text, li#three.red, text, li#four, text]

  console.log(elem.children);
  // 자식 요소 중에서 Element type 요소만을 반환한다.
  // HTMLCollection(4) [li#one.red, li#two.red, li#three.red, li#four, one: li#one.red, two: li#two.red, three: li#three.red, four: li#four]
  [...elem.children].forEach(el => console.log(el.nodeType)); // 1 (=> Element node)
}

//  #4 previousSibling,nextSibling :형제노드 탐색(text노드 포함 모든 형제노드)
 // #previousElementSibling, nextElementSibling : 형제노드탐색(Element type의 형제노드만 탐색)



 4. DOM Manipulation (조작)

 4/1 텍스트 노드에의 접근/수정

/*
요소의 텍스트는 텍스트 노드에 저장되어 있다. 텍스트 노드에 접근하려면 아래와 같은 수순이 필요하다.

해당 텍스트 노드의 부모 노드를 선택한다. 텍스트 노드는 요소 노드의 자식이다.
firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다.
텍스트 노드의 유일한 프로퍼티(nodeValue)를 이용하여 텍스트를 취득한다.
nodeValue를 이용하여 텍스트를 수정한다.
*/

   // #1 nodeValue  => 노드의 값을 반환한다
   //               => Return: 텍스트 노드는 문자열 반환, 요소노드는 null 반환
<script>
    const one = document.getElementById('one');
    console.dir(one);

    console.log(one.nodeName);
    console.log(one.nodeType);

    const textNode = one.firstChild;

    console.log(textNode.nodeName);
    console.log(textNode.nodeType);

    console.log(textNode.nodeValue);

    textNode.nodeValue = 'Pusan;'
</script>


4.2 어트리뷰트 노드에의 접근/수정

// #1. className  => class 어트리뷰트의 값을 취득 또는 변경한다.
//                =>
// #2. classList  => add, remove, item , toggle, contains, replace 메소드 제공 

//#1 예제
const elems = document.quertySelectorAll('li');

[...elems].forEach(elem => {
    if (elem.className == 'red'){
        elem.className = 'blue';
    }
});

//#2 예제
[...elems].forEach(elem =>{
    if(elem.classList.contains('blue')){
        elem.classList.replace('blue','red');
    }
});



// #3. id => id 어트리뷰트의 값을 취득 또는 변경한다.

//#3 예제

const heading = document.querySelector('h1') //h1 태그 요소 중 첫번째 요소 취득

console.dir(heading);
console.log(heading.firstChild.nodeValue); //Cities

heading.id = 'heading'; // id가 없으면 지정하고 있으면 변경한다.
console.log(heading.id)


// #4. hasAttribute(attribute) => 지정한 어트리뷰트 가지고 있는지 검사
//                             => Return: Boolean
// #5. getAttribute(attribute) => 어트리뷰트값 취득 
//                             => Return : 문자열
// #6. setAttribute(attribute, value) => 어트리뷰트와 어트리뷰트 값 설정
//                             => Return: undefined
// #7. remove(attribute)       => 지정한 어트리뷰트 제거 
//                             => Return : undefined

