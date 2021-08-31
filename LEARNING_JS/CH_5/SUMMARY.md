⭐ 표현식
============

-  표현식: 값으로 평가될 수 있는 문(statement)
</br>

    let x;       // 선언문
    x = 3 * 5;   // 표현식

- 첫번째 표현식: 3 * 5
- 두번째 표현식: x 에 15 를 할당
- 곱셈 표현식은 곱셈 연산자(\*)와 피연산자로 이루어짐
- 피연산자 자체도 표현식
- 식별자 표현식과 리터럴 표현식도 있음

</br>
</br>

⭐ 연산자
============

1 - 산술 연산자
----

- \+ : 덧셈 또는 문자열 병합
- \- : 뺄셈
- / : 나눗셈
- \* : 곱셈
- % : 나머지 (ex: 3 % 2 // 1)
- 단항 부정 -x : x의 부호를 바꿈 (ex: x가 5이면 -x는 -5)
- 단항 플러스 +x : x가 숫자가 아니면 숫자로 변환을 시도 (ex: x 가 "3" 이면 +x 는 3)
- 전위 증가 ++x : x에 1을 더한 다음 평가
- 후위 증가 x++ : x를 평가한 다음 1을 더함
- 전위 감소 --x : x에서 1을 뺀 다음 평가
- 후위 감소 x-- : x의 값을 평가한 다음 1을 뺌

</br>
</br>

2 - 비교 연산자
----

- 일치함(Strict Equality): 같은 객체를 가리키거나 원시 타입의 경우 같은 타입과 값을 가짐 `===` `!==`
- 동등함(Loose Equality): 같은 객체를 가리키거나 원시 타입의 경우 같은 값을 가짐 `==` `!=`

</br>
    
    const n = 5;
    const s = "5";
    n === s; // false -- 타입이 다릅니다.
    n != = s; // true
    n === Number(s); // true -- 문자열 "5"를 숫자 5로 변환했습니다.
    n !== Number(s); // false
    n == s; // true; 권장하지 않습니다.
    n != s; // false; 권장하지 않습니다.
    const a = { name: "an object" };
    const b = { name: "an object" };
    a === b; // false -- 객체는 항상 다릅니다.
    a != = b; // true
    a == b; // false; 권장하지 않습니다.
    a != b; // true; 권장하지 않습니다.
- 대소 관계: `<` `<=` `>` `>=`
- ❗ NaN 은 무엇과도 같지 않다
- NaN === NaN 과 NaN == NaN 모두 false

</br>
</br>

⭐ 문자열 병합
============

- `+` 연산자를 이용하여 피연산자 중에 어느 하나라도 문자열이면 문자열 병합을 수행
</br>

    3 + 5 + "8" // 문자열 8"8"이 됩니다.
    "3" + 5 + 8 // 문자열 3"58"이 됩니다.

</br>
</br>

⭐ 참 같은 값과 거짓 같은 값
============

1 - 거짓 같은 값
----

- undefined
- null
- false
- 0
- NaN
- '' (빈 문자열)

</br>
2 - 참 같은 값
----

- 거짓 같은 값을 제외한 모든 값
- 모든 객체. valueOf ( ) 메서드를 호출했을 때 false를 반환하는 객체도 참 같은 값에 속한다.
- 배열. 빈 배열도 참 같은 값에 속한다.
- 공백만 있는 문자열 (" " 등)
- 문자열 "false"

</br>
</br>

⭐ 논리 연산자
============

-  AND(`&&`), OR(`||`), NOT(`!`)
</br>

    const skipIt = true;
    let x = 0;
    const result = skipIt || x++;  // result 는 true

- skipIt 이 true 이므로 result 도 true
- 앞에서 이미 단축 평가가 완료되었으므로 뒤의 표현식이 실행되지 않아 x 는 그대로 0
</br>

    const doIt = true;
    let x = 0;
    const result = doIt && x++;   // result 는 0
    
- 피연산자가 불리언이 아니라면, 결과를 결정한 값이 반환됨

</br>
</br>

⭐ 조건 연산자
============

- 3항 연산자
</br>

    const doIt = false;
    const result = doIt ? "Did it!" : "Didn't do it.";

</br>
</br>

⭐ 쉼표 연산자
============

    let x = 0, y = 10, z;
    z = (x++, y++);       // z 는 10

- 만약에 괄호가 없이 z = x++, y++; 이라면 z 는 0 이 된다
</br>
</br>

⭐ 연산자 그룹
============

1 - 비트 연산자
----

- & : 비트 AND : 0b1010 & 0b1100 // 결과: 0b1000
- | : 비트 OR : 0b1010 | 0b1100 // 결과: 0b1110
- ^ : 비트 XOR : 0b1010 ^ 0b1100 // 결과: 0b0110
- ~ : 비트 NOT : ~0b1010 // 결과: 0b0101
- << : 왼쪽 시프트 : 0b1010 << 1 // 결과: 0b10100
- >> : 부호가 따라가는(Sign-propagating) 오른쪽 시프트
- >>> : 0으로 채우는(Zero-fill) 오른쪽 시프트
</br>
</br>

2 - typeof 연산자
----

- 피연산자의 타입을 나타내는 문자열을 반환
- typeof undefined "undefined"
- typeof null "object"
- typeof {} "object"
- typeof true "boolean"
- typeof 1 "number"
- typeof "" "string"
- typeof Symbol() "symbol"
- typeof function() {} "function"

</br>
</br>

3 - void 연산자
----

- 피연산자를 평가한 후 undefined를 반환
</br>

    <a href="javascript:void 0">Do nothing.</a>
    
</br>
</br>

4 - 할당 연산자
----

</br>
</br>


⭐ 해체 할당(Destructuring Assignment)
============

- 객체나 배열을 변수로 ‘해체’할 수 있다.
</br>

    // 객체 선언
    const obj = { b: 2, c: 3, d: 4 };
    
    // 해체 할당
    const {a, b, c} = obj;
    a; // undefined: obj에는 "a" 프로퍼티가 없습니다.
    b; // 2
    c; // 3
    d; // ReferenceError: "d"는 정의되지 않았습니다.

- 할당만으로 객체 할당을 하려면 괄호가 필요하다.
</br>

    const obj = { b: 2, c: 3, d: 4 };
    let a, b, c;
    
    // 에러가 일어납니다.
    {a, b, c} = obj;
    
    // 동작합니다.
    ({a, b, c} = obj);
    
- ❗ 배열을 해체 할당하기
</br>

    // 배열 선언
    const arr = [1, 2, 3];
    
    // 배열 해체 할당
    let [x, y] = arr;
    x; // 1
    y; // 2
    z; // ReferenceError: "z"는 정의되지 않았습니다.
    
- ❗ `확산 연산자(...)` 이용하여 남은 요소 새 배열에 할당하기
</br>

    const arr = [1, 2, 3, 4, 5];
    
    let [x, y, ...rest] = arr;
    x; // 1
    y; // 2
    rest; // [3, 4, 5]
</br>
</br>
