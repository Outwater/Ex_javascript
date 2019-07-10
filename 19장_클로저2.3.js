// 2.3 정보의 은닉

function Counter(){
    var counter = 0;

    this.increase = function(){
        return ++counter;
    };

    this.decrease = function(){
        return --counter;
    };
}

const counter = new Counter();

console.log(counter.increase());
console.log(counter.decrease());


//2.4 자주발생하는 실수

//잘못된 코드
var arr= [];

for (var i = 0; i<5; i++){
    arr[i] = function(){
        return i;
    };
}

for (var j = 0; j<arr.length; j++){
    console.log(arr[j]());
}

//클로저를 이용한 제대로 된 코드

var arr=[];

for(var i=0; i<5; i++){
    arr[i] = (function(id){
        return function(){
            return id;
        };
    }(i));
}

for(var j =0; j<arr.length; j++){
    console.log(arr[j]());
}

//같은 것을 고차 함수를 이용하여 표현

const arr =new Array(5).fill();
arr.forEach((v,i,array)=>array[i]=()=>i);
arr.forEach(f=>console.log(f()));
