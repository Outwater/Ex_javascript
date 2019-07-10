function makeCounter(predicate){
    var counter = 0;
    return function(){
        counter=predicate(counter);
        return counter;
    };
}

//보조함수1
function increase(n){
    return ++n;
}

//보조함수2
function decrease(n){
    return --n;
}

const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());
