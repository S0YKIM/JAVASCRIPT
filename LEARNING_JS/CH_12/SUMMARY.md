⭐ 이터레이터(Iterator)
============

- '지금 어디 있는지' 파악할 수 있도록 돕는 일종의 책갈피
- 이터러블 객체의 예시: 배열

✔️사용 예시: book 이라는 배열에 책갈피를 만들어 끝까지 읽어보자!
</br>

    const book = [
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
        "Up above the world you fly,",
        "Like a tea tray in the sky.",
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
    ];
</br>

1. `values()` 메서드를 사용해 이터레이터를 생성
</br>

    const it = book.values();
</br>

2. `next()` 메서드를 호출해 읽기 시작
- `next()` 메서드가 반환하는 객체:
</br>

(1) `value` 프로퍼티: 지금 보이는 페이지
</br>

(2) `done` 프로퍼티: 마지막 페이지를 읽으면 `true`, 아니면 `false`
</br>

    it.next(); // { value: "Twinkle, twinkle, little bat!", done: false }
    it.next(); // { value: "How I wonder what you're at!", done: false }
    it.next(); // { value: "Up above the world you fly,", done: false }
    it.next(); // { value: "Like a tea tray in the sky.", done: false }
    it.next(); // { value: "Twinkle, twinkle, little bat!", done: false }
    it.next(); // { value: "How I wonder what you're at!", done: false }
    it.next(); // { value: undefined, done: true }
    it.next(); // { value: undefined, done: true }
    it.next(); // { value: undefined, done: true }
</br>

- ❗ 배열의 마지막 요소 이후의 value 는 `undefined`가 되지만 `next()`는 계속 호출 가능!

</br>
</br>

⭐ 이터레이터와 while 루프를 사용해 for...of 루프 흉내내기
============

    const it = book.values();
    let current = it.next();
    while(!current.done) {
        console.log(current.value);
        current = it.next();
    }
    
    // Twinkle, twinkle, little bat!
    // How I wonder what you're at!
    // Up above the world you fly,
    // Like a tea tray in the sky.
    // Twinkle, twinkle, little bat!
    // How I wonder what you're at!

</br>

- 모든 이터레이터는 독립적
- 따라서 새 이터레이터를 만들 때마다 처음부터 시작

</br>

    const it1 = book.values();
    const it2 = book.values();
    // 어느 이터레이터도 아직 시작하지 않음
    
    // it1 으로 1-2 페이지를 읽어보자.
    it1.next(); // { value: "Twinkle, twinkle, little bat!", done: false }
    it1.next(); // { value: "How I wonder what you're at!", done: false }
    
    // it2로 1 페이지를 읽어보자.
    it2.next(); // { value: "Twinkle, twinkle, little bat!", done: false }
    
    // it1으로 한 페이지를 더 읽어보자. (3페이지)
    it1.next(); // { value: "Up above the world you fly,", done: false }
    
</br>
</br>

⭐ 이터레이션 프로토콜
============

- 어떠한 객체든지 이터러블 객체로 바꾸는 방법

✔️사용 예시: 메시지에 타임스탬프를 붙이는 로그 클래스를 만들어보자.
</br>

1. 내적으로 타임 스탬프가 붙은 메시지는 배열에 저장한다.
</br>

    class Log {
        constructor() {
            this.messages = [];
        }
        add(message) {
            this.messages.push({ message, timestamp: Date.now() });
        }
    }
</br>

2. `Symbol.iterator`메서드를 `Log` 클래스에 추가
- 로그를 배열을 조작하는 것처럼 다루기 위해서 이터레이션 프로토콜이 필요 
- 로그를 기록한 항목을 순회(iterate)하기 위해서 이터레이터 생성
</br>

    class Log {
        constructor() {
            this.messages = [];
        }
        add(message) {
            this.messages.push({ message, timestamp: Date.now() });
        }
        [Symbol.iterator]() {
            return this.messages.values();
        }
    }
</br>

3. `Log` 인스턴스를 배열처럼 순회 가능!
</br>

    const log = new Log();
    log.add("first day at sea");
    log.add("spotted whale");
    log.add("spotted another vessel");
    //...
    
    // 로그를 배열처럼 순회합니다!
    for(let entry of log) {
        console.log(`${entry.message} @ ${entry.timestamp}`);
    }
</br>

4. 또는 다음과 같이 직접 이터레이터를 만들 수도 있다.
</br>

    class Log {
        //...
    
        [Symbol.iterator]() {
            let i = 0;
            const messages = this.messages;
            return {
                next() {
                    if(i > = messages.length)
                        return { value: undefined, done: true };
                    return { value: messages[i++], done: false };
                }
            }
        }
    }

</br>
</br>

✔️사용 예시: 피보나치 수열을 만들어보자.
</br>

    class FibonacciSequence {
        [Symbol.iterator]() {
            let a = 0, b = 1;
            return {
                next() {
                    let rval = { value: b, done: false };
                    b + = a;
                    a = rval.value;
                    return rval;
                }
            };
        }
    }
    
    const fib = new FibonacciSequence();
    let i = 0;
    for(let n of fib) {
        console.log(n);
        if(++i > 9) break;
    }
</br>

- 무한루프에 빠지지 않도록 `if` 제어문을 추가해준다. 

</br>
</br>

⭐ 제너레이터(Generator)
============

- 이터레이터를 사용해 자신의 실행을 제어하는 함수
- 다음의 특징들을 제외하면 일반적인 함수와 같다.
</br>

1. 언제든지 호출자에게 제어권을 넘길 수 있다. (yield)
- 일반적인 함수의 호출자는 매개변수 외에는 함수의 실행을 제어할 수 있는 방법이 없다.
- 제너레이터에서는 함수의 실행을 개별적 단계로 나누어 함수의 실행을 제어한다.
</br>

2. 제너레이터를 호출한 즉시 실행되는 것이 아니다.
- 이터레이터를 반환하고 이터레이터의 `next` 메서드를 호출함으로써 실행횐다.
</br>

3. 제너레이터와 호출자 사이에 양방향 통신이 가능하다.
- 통신은 `yield` 표현식을 통해 이루어진다.
- `yield` 표현식의 값은 `next` 메서드를 호출할 때에 제공되는 매개변수이다.
</br>

4. 문법은 `function` 뒤에 애스터리스크(`*`)를 붙인다.
- `return` 대신 `yield` 키워드를 쓸 수도 있다.
</br>

✔️사용 예시: 무지개 색깔을 반환하는 제너레이터를 만들어보자.
</br>

1. 애스터리스크(`*`) 기호를 써서 제너레이터를 생성한다.
</br>

    function* rainbow() { //
        yield 'red';
        yield 'orange';
        yield 'yellow';
        yield 'green';
        yield 'blue';
        yield 'indigo';
        yield 'violet';
    }
</br>

2. 제너레이터가 반환한 이터레이터를 이용하여 단계별로 진행한다.
</br>

    const it = rainbow();
    it.next(); // { value: "red", done: false }
    it.next(); // { value: "orange", done: false }
    it.next(); // { value: "yellow", done: false }
    it.next(); // { value: "green", done: false }
    it.next(); // { value: "blue", done: false }
    it.next(); // { value: "indigo", done: false }
    it.next(); // { value: "violet", done: false }
    it.next(); // { value: undefined, done: true }
</br>

3. 제너레이터가 반환한 이터레이터는 `for...of` 루프에서도 쓸 수 있다.
</br>

    for(let color of rainbow()) {
        console.log(color);
    }
</br>
</br>

