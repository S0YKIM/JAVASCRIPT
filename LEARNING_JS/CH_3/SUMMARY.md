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

⭐ 원시 타입과 객체
============

1 - 원시(Primitive)
-----

- 절대 불변 (ex: 숫자 '5' 는 항상 숫자 '5')
- 숫자, 문자열, 불리언, 심볼, null, undefined
</br>

2 - 객체(Object)
----

- 여러 가지 형태와 값을 가짐
- Array, Date, RegExp, Map, WeakMap, Set, WeakSet
- Number, String, Boolean
</br>
❗ Number 객체의 유용한 프로퍼티들
- Number.EPSILON: 1에 더했을 때 1과 구분되는 값을 만드는 가장 작은 값
- Number.MAX_SAFE_INTEGER: 표현 가능한 가장 큰 정수
- Number.MIN_SAFE_INTEGER: 표현 가능한 가장 작은 정수
- Number.MAX_VALUE: 표현 가능한 가장 큰 숫자
- Number.MIN_VALUE: 표현 가능한 가장 작은 숫자
- Number.NEGATIVE_INFINITY: -무한수
- Number.POSITIVE_INFINITY: 무한수
- Number.NaN: 숫자가 아닌 것(Not a Number)



