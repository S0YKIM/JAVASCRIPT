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

⭐ 함수와 매개변수
============

    function avg(a, b) {
    return (a + b)/2;
    }
    
    avg(5, 10); // 7.5
    
- 정해진 매개변수: 첫번째 줄에서 함수 선언시 a, b
- 실제 매개변수: 5, 10 이라는 값을 받은 a, b 로 함수 바디 안에서만 존재
- 함수 매개변수는 변수 자체가 아니라 그 값을 전달받는다.
- 함수 내부의 매개변수 o와 함수 바깥의 변수 o는 다르다.

</br>

    function f(o) {
    o.message = "f에서 수정함";
    o = {
    message: "새로운 객체!"
    };
    console.log(`f 내부: o.message= "${o.message}" (할당 후)`);
    }

    let o = {
    message: '초기값'
    };
    console.log(`f를 호출하기 전: o.message= "${o.message}"`);
    f(o);
    console.log(`f를 호출한 다음: o.message= "${o.message}"`);
    
    // 실행 결과
    f를 호출하기 전: o.message= "초기값"
    f 내부: o.message= "새로운 객체!" (할당 후)
    f를 호출한 다음: o.message="f에서 수정함"
    
</br>
</br>

⭐ 매개변수 해체
============

    function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
    }
    
    const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
    };
    
    getSentence(o); // "I love JavaScript"
    
- 배열 역시 해체할 수 있다.
</br>

    function getSentence([ subject, verb, object ]) {
    return `${subject} ${verb} ${object}`;
    }
    const arr = [ "I", "love", "JavaScript" ];
    getSentence(arr); // "I love JavaScript"
    
- 일반적으로 매개변수에 값을 제공하지 않으면 undefined 가 값으로 할당된다.
- 하지만 ES6 에서는 매개변수에 기본값을 지정할 수 있게 되었다.
</br>

    function f(a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`;
    }
    f(5, 6, 7); // "5 - 6 - 7"
    f(5, 6); // "5 - 6 - 3"
    f(5); // "5 - default - 3"
    f(); // "undefined - default - 3"

</br>
</br>

⭐ 메서드(Method)
============

- 객체의 프로퍼티인 함수
</br>

    const o = {
    name: 'Wallace',                            // 원시 값 프로퍼티
    bark: function() { return 'Woof!'; },       // 함수 프로퍼티(메서드)
    }
    
    bark() { return 'Woof!'; },                 // 위와 동일한 효과
    
</br>
</br>

⭐ this
============

- 호출한 메서드를 소유하는 객체
- 아래 예시에서 `this` 는 `o` 에 묶인다.
</br>

    const o = {
    name: 'Wallace',
    speak() { return `My name is ${this.name}!`; },
    }
    
    o.speak(); // "My name is Wallace!
</br>
</br>

⭐ 익명 함수
============

- 함수에 식별자가 주어지지 않음
- 함수 표현식으로 익명 함수를 만들고 변수에 할당
- 아래의 경우 `f()` 로 함수를 호출할 수 있다.
</br>

    const f = function() {
    // ...
    };
</br>
</br>

⭐ 화살표 표기법
============

- 화살표 함수는 항상 익명이다.
- `function` 을 생략 가능
- 함수에 매개변수가 단 하나 뿐이라면 `괄호 ( )`도 생략 가능
- 함수 바디가 표현식 하나라면 `중괄호 { }` 와 `return` 문도 생략 가능
</br>

    const f1 = function() { return "hello!"; }
    // 또는
    const f1 = () => "hello!";
    
    const f2 = function(name) { return `Hello, ${name}!`; }
    // 또는
    const f2 = name = > `Hello, ${name}!`;
    
    const f3 = function(a, b) { return a + b; }
    // 또는
    const f3 = (a,b) => a + b;
</br>
</br>

⭐ this 의 값을 바꿀 수 있는 함수: call, apply, bind
============

1 - call
----

- this 를 특정 값으로 지정할 수 있다.
- 함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용 가능
</br>

    const bruce = { name: "Bruce" };
    const madeline = { name: "Madeline" };
    // 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
    function greet() {
    return `Hello, I'm ${this.name}!`;
    }
    greet(); // "Hello, I'm undefined!" - this는 어디에도 묶이지 않았습니다.
    greet.call(bruce); // "Hello, I'm Bruce!" - this는 bruce입니다.
    greet.call(madeline); // "Hello, I'm Madeline!" - this는 madeline입니다.
</br>


    function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
    }
    update.call(bruce, 1949, 'singer');
    // bruce는 이제 { name: "Bruce", birthYear: 1949,
    // occupation: "singer" } 입니다.
    update.call(madeline, 1942, 'actress');
    // madeline은 이제 { name: "Madeline", birthYear: 1942,
    // occupation: "actress" } 입니다.
</br>

2 - apply
----

- `call`은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만,
- `apply`는 매개변수를 배열로 받는다는 점이 차이
</br>

    update.apply(bruce, [1955, "actor"]);
    // bruce는 이제 { name: "Bruce", birthYear: 1955,
    // occupation: "actor" } 입니다.
    update.apply(madeline, [1918, "writer"]);
    // madeline은 이제 { name: "Madeline", birthYear: 1918,
    // occupation: "writer" } 입니다.
</br>

3 - bind
----

- 함수의 `this` 값을 영구히 바꾼다.
</br>

    const updateBruce = update.bind(bruce);
    updateBruce(1904, "actor");
    // bruce는 이제 { name: "Bruce", birthYear: 1904,
    // occupation: "actor" } 입니다.
    updateBruce.call(madeline, 1274, "king");
    // bruce는 이제 { name: "Bruce", birthYear: 1274,
    // occupation: "king" } 입니다.
    // madeline은 변하지 않았습니다.
</br>
