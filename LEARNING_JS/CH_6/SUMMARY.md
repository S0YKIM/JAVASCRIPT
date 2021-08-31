⭐ 함수
============

-  하나의 단위로 실행되는 문의 집합
-  함수 바디는 함수를 구성하는 문의 모음으로 { } 안에 쓴다
-  자바스크립트에서 함수 또한 객체이다
</br>

    function sayHello() {          // sayHello 라는 함수 선언
    
    console.log("Hello world!");
    console.log("¡Hola mundo!");
    console.log("Hallo wereld!");
    console.log("Привет мир!");
    
    }
    
    sayHello();                    // sayHello 함수 호출

</br>
</br>

⭐ 함수 호출과 참조
============

-  함수 식별자 뒤에 괄호() 를 쓰면 함수를 호출
-  괄호를 쓰지 않으면 함수는 실행되지 않고 참조된다
</br>

    function getGreeting() {
        return "Hello world!";
    }
    
    getGreeting();              // "Hello, World!"
    getGreeting;                // function getGreeting()

- 함수를 변수에 할당하기
</br>

    const f = getGreeting;
    f(); // "Hello, World!"
    
- 함수를 객체 프로퍼티에 할당하기
</br>

    const o = {};
    o.f = getGreeting;
    o.f(); // "Hello, World!"

- 함수를 배열에 할당하기
</br>
    
    const arr = [1, 2, 3];
    arr[1] = getGreeting; // arr은 이제 [1, function getGreeting(), 2]입니다.
    arr[1](); // "Hello, World!"
</br>
</br>
