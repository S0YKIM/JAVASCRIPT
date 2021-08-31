⭐ 맵과 셋
============

- ES6 에서 새로 도입된 데이터 구조
- 맵(Map): 키와 값을 연결한다는 점에서 `객체(Object)`와 비슷
- 셋(Set): 중복을 허용하지 않는다는 점을 제외하면 `배열(Array)`과 비슷
</br>
</br>

⭐ 맵(Map)
============

- ES6 이전에는 키와 값을 연결하기 위해서는 객체를 사용해야 했는데, 아래와 같은 단점이 있었다.
</br>

    프로토타입 체인 때문에 의도하지 않은 연결이 생길 수 있다.
    객체 안에 연결된 키와 값이 몇 개나 되는지 쉽게 알아낼 수 있는 방법이 없다.
    키는 반드시 문자열이나 심볼이어야 하므로 객체를 키로 써서 값과 연결할 수 없다.
    객체는 프로퍼티 순서를 전혀 보장하지 않는다.

- 이러한 결함을 해결한 것이 `맵(Map)` 객체!

✔️예시
----

- 사용자 객체 각각에게 맵을 이용해 역할을 부여해보자.
</br>

    const u1 = { name: 'Cynthia' };
    const u2 = { name: 'Jackson' };
    const u3 = { name: 'Olive' };
    const u4 = { name: 'James' };

(1) 먼저 맵을 생성한다.
</br>

    const userRoles = new Map();

(2) 맵의 `set()` 메서드를 사용해 사용자 역할을 할당한다.
</br>

    userRoles.set(u1, 'User');
    userRoles.set(u2, 'User');
    userRoles.set(u3, 'Admin');

- 또는 다음과 같이 체인으로 연결해 더욱 간결하게 사용 가능하다.
</br>

    userRoles
        .set(u1, 'User')
        .set(u2, 'User')
        .set(u3, 'Admin');

- 또는 생성자에 배열의 배열을 넘기는 식으로도 가능하다.
</br>

    const userRoles = new Map([
        [u1, 'User'],
        [u2, 'User'],
        [u3, 'Admin'],
    ]);

(3) 사용자의 역할을 알아내기 위해서는 `get()` 메서드를 사용한다. `has()` 메서드는 맵에 키가 존재하는지 여부를 확인해준다.
</br>

    userRoles.has(u1); // true
    userRoles.get(u1); // "User"
    userRoles.has(u4); // false
    userRoles.get(u4); // undefined // 존재하지 않는 키에 get()을 호출하면 반환
    
(4) 맵에 이미 존재하는 키에 `set()`을 호출하면 값이 교체된다.
</br>
    

