//연산자

//산술연살자
// 선대입 후 증가
var x = 5 , result;
result = x++;
console.log(result,x)
// 5,6


// 선증가 후대입
var x =5 , result;
result= ++x;
console.log(result,x)
// x증가가 먼저 일어나 6,6


//8장
//블록문

//조건문 if...else

var temperature =2;
var drink;

if (temperature>10){
    drink='안마신다';
}
console.log(drink);

if(temperature>10){
    drink='안마신다';
}else{
    drink='마신다';
}
console.log(drink);

//switch문 (if...else 와 유사)

var menu_number= 1;
var menu_name;

switch(menu_number){
    case 1:
        menu_name='돈까스';
    case 2:
        menu_name='비빔밥';
    case 3:
        menu_name='냉면';
    case 4:
        menu_name='후식아이스크림';
    default:
        menu_name='올바른 메뉴넘버를 입력하세요';
}
console.log(menu_name);

//break 추가해야함

var menu_number= 1;
var menu_name;

switch(menu_number){
    case 1:
        menu_name='돈까스';
        break;
    case 2:
        menu_name='비빔밥';
        break;
    case 3:
        menu_name='냉면';
        break;
    case 4:
        menu_name='후식아이스크림';
        break;
    default:
        menu_name='올바른 메뉴넘버를 입력하세요';
}
console.log(menu_name);

//for 문

for(var i =0; i<2; i++){
    console.log(i)
}
//0 , 1 

for(var i=1; i>=0; i--){
    console.log(i)
}


//while문

var count =0 ;

while (count <3){
    console.log(count);
    count++;
}

var count =0;
while (true){
    console.log(count);
    count++;
    if (count==5) break;
}

//01234  *5는 출력안됨

//do...while

var count=0;
do{
    console.log(count);
    count++;
} while (count<3);
//012


//문자열에서 특정문자의 인덱스를 검색하는예

var string = 'Hello World.';
var index ;

for(var i =0; i< string.length; i++){
    if ( string.substring(i,i+2)=='Wo'){
        index = i;
        break;
    }
}
console.log(index);

string='HelloWorld'
console.log(string.substring(0,3))
//string.substring (시작인덱스,끝문자인덱스)
//string.substr(시작인덱스, 길이)


var string = 'Hello World.';
var count = 0;

for (var i=0; i<string.length;i++){
    if(string[i]!='l')continue; //H가 아니면 위로 올라간다.
    count++; //continue 실행되면 이문은 실행x
}
console.log(count);

//같은 식1  (by match mathod)
console.log(string.match(/l/g).length);

//같은 식2  (by for문)
string='Hello World';
var count=0;
for (var i =0; i<string.length;i++){
    if(string[i]=='l')count++;
}
console.log(count);


