⭐ 변수와 상수
============

1 - 변수(Variable)
--------

    let currentTempC = 22;
    currentTempC = 22.5;

- `let` 키워드를 통해 'currentTempC' 라는 이름의 `변수`를 선언
-  변수의 값은 언제든지 바꿀 수 있다.

</br>

    let targetTempC;
    또는
    let targetTempC = undefined;

- 변수를 선언할 때에 초기값을 지정하지 않아도 된다.

</br>

2 - 상수(Constant)
-----

    const user = "42Seoul";
    
- 한 번 할당할 값을 바꿀 수 없다.
- 가능하면 변수보다 상수를 선언하는 습관을 가지자.

</br>

    let targetTempC, room1 = "conference_room_a", room2 = "lobby";
    const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;

- 하나의 `let`문 또는 `const` 문 안에서 여러 변수를 선언할 수도 있다.

</br>
</br>

⭐ 식별자와 리터럴
============

1 - 식별자(Identifier)
-----

- 변수, 상수, 그리고 함수의 이름을 말한다
- 글자, 달러기호($), 밑줄(\_), 숫자만 사용 가능
- 반드시 글자, 달러기호($), 밑줄(\_)로만 시작한다
</br>
❗ 식별자는 숫자로 시작할 수 없음

- 카멜 케이스(Camel Case): `currentTempC`
- 스네이크 케이스(Snake Case): `current_temp_c`
</br>

2 - 리터럴(Literal)
----

- 상수나 변수에 할당하는 값을 의미
- 따옴표로 둘러싸이면 리터럴이다.
</br>
❗ 숫자로 시작하는 식별자는 존재하지 않으므로 따옴표를 사용하지 않음

    let room1 = "conference_room_a";
    
- `room1`: 식별자
- `"conference_room_a"`: 리터럴

</br>
    
    let room2 = room1;
- `room2` 의 값은 `"conference_room_a"`가 되었다.
</br>
❗ `let room2 = conference_room_a` 는 에러가 발생한다. `conference_room_a`라는 식별자가 존재하지 않기 때문!
</br>
</br>

⭐ 원시(Primitive)
=============

- 절대 불변 (ex: 숫자 '5' 는 항상 숫자 '5')
- 숫자, 문자열, 불리언, 심볼, null, undefined
</br>

1 - 숫자
----
- 숫자형 데이터 타입은 언제나 `double`
</br>

2 - 문자열
----
- 문자열 리터럴에는 큰따옴표("), 작은따옴표('), 백틱(\`)을 사용
- 이스케이프(\): 문자열 안에 따옴표나 백틱을 사용해야 하는 경우 또는 특수문자(ex: \n, \t)
</br>

    const dialog1 = "He looked up and said \"don't do that!\" to Max.";
    const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
    const s = "In JavaScript, use \\ as an escape character in strings.";

- 문자열 병합: 변수나 상수를 문자열 안에 사용 가능
</br>

    let currentTemp = 19.5;
    const message = "The current temperature is " + currentTemp + "\u00b0C";
    
- 문자열 템플릿: 백틱을 사용해 변수나 상수를 문자열 안에 사용
</br>

    let currentTemp = 19.5;
    const message = `The current temperature is ${currentTemp}\u00b0C`;
    
</br>
    
3 - 불리언
----
- 참(True) 또는 거짓(False) 두 가지 값을 가짐

    let heating = true;
    let cooling = false;
</br>

4 - 심볼
----
- 항상 유일하며 다른 어떤 심볼과도 일치하지 않음
</br>

    const RED = Symbol("The color of a sunset!");
    const ORANGE = Symbol("The color of a sunset!");
    RED === ORANGE // false: 심볼은 모두 서로 다름

</br>

5 - null 과 undefined
----

- null: 변수의 값을 아직 모르거나 적용할 수 없는 경우 할당
- undefined: 자바스크립트 자체에서 사용
</br>

    let currentTemp; // 암시적으로 undefined
    const targetTemp = null; // "아직 모르는" 값
    currentTemp = 19.5; // currentTemp 에 값을 할당함
    currentTemp = undefined; // currentTemp는 초기화되지 않음. 권장하지 않는 방법

</br>
</br>

⭐ 객체(Object)
=============

- 여러 가지 형태와 값을 가지는 컨테이너
- 객체의 내용물(=Property)은 바뀔 수 있지만 객체 자체는 변하지 않는다.
- 중괄호(`{}`)를 사용해 어디부터 어디까지가 객체인지 표현한다.
- 멤버 접근 연산자(`.`): 프로퍼티 이름이 유효한 식별자인 경우
- 계산된 멤버 접근 연산자(`[]`): 프로퍼티 이름이 유효하거나 유효하지 않거나 사용 가능
- 심볼 프로퍼티에 접근할 때에도 대괄호 사용
- Array, Date, RegExp, Map, WeakMap, Set, WeakSet
- Number, String, Boolean
</br>

    const obj = {}; // 빈 객체
    obj.color = "yellow"; // color 프로퍼티 추가
    obj["not an identifier"] = 3; // not an identifier 프로퍼티 추가
    
    const SIZE = Symbol();
    obj[SIZE] = 8;

</br>
❗ 객체를 만듦과 동시에 프로퍼티 만드는 방법
</br>

    const sam1 = {
        name: 'Sam',
        age: 4,
    };         // 프로퍼티 이름과 값은 콜론(:)으로 구분

    const sam2 = { name: 'Sam', age: 4 };    // 한 줄로 선언

    const sam3 = {
        name: 'Sam',
        classification: {         // 프로퍼티 값도 객체가 될 수 있음
            kingdom: 'Anamalia',
            phylum: 'Chordata',
            class: 'Mamalia',
        },
    };

- 객체에서 프로퍼티를 삭제하는 방법: `delete`
</br>

    delete sam3.classification;

</br>
❗ Number 객체의 유용한 프로퍼티들

- `Number.EPSILON`: 1에 더했을 때 1과 구분되는 값을 만드는 가장 작은 값
- `Number.MAX_SAFE_INTEGER`: 표현 가능한 가장 큰 정수
- `Number.MIN_SAFE_INTEGER`: 표현 가능한 가장 작은 정수
- `Number.MAX_VALUE`: 표현 가능한 가장 큰 숫자
- `Number.MIN_VALUE`: 표현 가능한 가장 작은 숫자
- `Number.NEGATIVE_INFINITY`: -무한수
- `Number.POSITIVE_INFINITY`: 무한수
- `Number.NaN`: 숫자가 아닌 것(Not a Number)

</br>
</br>

⭐ 배열(Array)
=============

- 특수한 객체로, 요소의 데이터 타입을 가리지 않는다.
- 배열 리터럴은 대괄호(`[]`) 안에 배열 요소를 쉼표(`,`)로 구분하여 사용

</br>

    const a1 = [1, 2, 3, 4]; // 숫자로 구성된 배열
    
    const a2 = [1, 'two', 3, null]; // 여러 가지 타입으로 구성된 배열
    
    const a3 = [ // 여러 줄로 정의한 배열
        "What the hammer? What the chain?",
        "In what furnace was thy brain?",
        "What the anvil? What dread grasp",
        "Dare its deadly terrors clasp?",
    ];
    
    const a4 = [ // 객체가 들어있는 배열
        { name: "Ruby", hardness: 9 },
        { name: "Diamond", hardness: 10 },
        { name: "Topaz", hardness: 8 },
    ];
    
    const a5 = [ // 배열이 들어있는 배열
        [1, 3, 5],
        [2, 4, 6],
    ];
    
- 배열 요소에 접근하는 방법: 대괄호(`[]`)안에 인덱스 숫자 쓰기
- ❗ `length` 프로퍼티는 요소의 개수 반환
</br>

    const arr = ['a', 'b', 'c'];
    arr[0];                        // 'a'
    arr[arr.length - 1];           // 'c'
    
 </br>
 </br>
 
⭐ 날짜(Date)
=============

- 객체의 종류
- `new Date()`: 현재 날짜와 시간
- `new Date(a, b, c)`: 특정 날짜(연, 월, 일)
- `new Date(a, b, c, d, e)`: 특정 날짜와 시간(연, 월, 일, 시, 분)

</br>

    const now = new Date();
    now; // Fri Dec 16 2016 09:20:16 GMT+0900 (KST)
    
    const halloween = new Date(2016, 9, 31);
    // 월은 0 부터 시작하므로 10월을 의미
    
    const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm
    
- 배열 요소에 접근하는 방법: 대괄호(`[]`)안에 인덱스 숫자 쓰기
- ❗ `length` 프로퍼티는 요소의 개수 반환
</br>

    const arr = ['a', 'b', 'c'];
    arr[0];                        // 'a'
    arr[arr.length - 1];           // 'c'

</br>
</br>

⭐ 데이터 타입 변환
=============

1 - 숫자로 바꾸기
----

- 숫자로 바꿀 수 없는 경우는 `NaN` 반환

(1) Number() 객체 생성자
</br>

    const numStr = "33.3";
    const num = Number(numStr);  // 33.3

</br>
(2) parseInt() 또는 parseFloat() 함수

    const a = parseInt("16 volts", 10); // " volts"는 무시, 10진수  // 16
    const b = parseInt("3a", 16); // 16진수 3a를 10진수로 바꿈  // 58
    const c = parseFloat("15.5 kph"); // " kph"는 무시, 기수는 10이라고 가정 // 15.5
    
- 배열 요소에 접근하는 방법: 대괄호(`[]`)안에 인덱스 숫자 쓰기
- ❗ `length` 프로퍼티는 요소의 개수 반환
</br>

    const arr = ['a', 'b', 'c'];
    arr[0];                        // 'a'
    arr[arr.length - 1];           // 'c'
