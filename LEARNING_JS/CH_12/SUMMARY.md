⭐ 이터레이터
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
