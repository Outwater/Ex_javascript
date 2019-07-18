/*################################################################
#### 31. 동기식 처리모델과 비동시식 처리모델 #########################
##########################################################*/

/*
동기식처리모델(Synchronous processing model)
    
    *동기식처리모델은 직렬적으로 태스크(task)를 수행
     순차진행이 원칙이며 다음 작업은 대기한다.
    ex) */
    function func1(){
        console.log('func1');
        func2();
    }

    function func2(){
        console.log('func2');
        func3();
    }

    function func3(){
        console.log('func3');
    }

    func1();

/*
비동기식 처리모델(Asynchronous processing model 또는 non-Blocking processing model)

    *비동기식 처리모델은은 병렬적으로 태스크를 수행한다. 
     즉 태스크가 종료되지 않은 상태라 하더라도 대기하지 않고 다음 태스크를 실행한다.
    예를 들어 서버에서 데이터를 가져와서 화면에 표시하는 태스크를 수행시
    서버에 데이터를 요청한 이후 서버로 부터 데이터가 응답될 때까지 대기하지 않고 즉시 다음 태스크를 수행한다.
    이후 서버로부터 데이터가 응답되면 이벤트가 발생하고 , 이벤트 핸들러가 데이터를 가지고 계속하여 태스크를 수행한다.
  ex) */

  function func1(){
      console.log('func1');
      func2();
  }

  function func2(){
      setTimeout(function(){
          console.log('func2');
      },0);
      func3();
  }

  function func3(){
      console.log('func3');
  }
  func1();

  /* 위예제를 실행하면 func1 -> func3 -> func2 로 출력된다.
  왜냐하면 setTimeout 메소드가 비동기 함수이기 때문이다.
  
  setTimeout의 콜백함수는 즉시 실행되지 않고 지정 대기 시간만큼 기다리다가 'tick' 이벤트가
  발생하면 이벤트 큐로 이동한 후 call stack이 비어졌을 때 call stack으로 이동되어 실행된다.
  따라서 setTimeout의 대기 시간이 0초 이더라도 callstack에 이미 func3가 있기 때문에 func3 이후 콜스택이 비어
  있을 때 func2가 출력된다.
  */
 