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
