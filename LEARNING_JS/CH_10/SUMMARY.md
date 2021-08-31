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

    1. 프로토타입 체인 때문에 의도하지 않은 연결이 생길 수 있다.
    2. 객체 안에 연결된 키와 값이 몇 개나 되는지 쉽게 알아낼 수 있는 방법이 없다.
    3. 키는 반드시 문자열이나 심볼이어야 하므로 객체를 키로 써서 값과 연결할 수 없다.
    4. 객체는 프로퍼티 순서를 전혀 보장하지 않는다.

- 이러한 결함을 해결한 것이 `맵(Map)` 객체!

✔️사용 예시
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
</br>

(3) 사용자의 역할을 알아내기 위해서는 `get()` 메서드를 사용한다. `has()` 메서드는 맵에 키가 존재하는지 여부를 확인해준다.
</br>

    userRoles.has(u1); // true
    userRoles.get(u1); // "User"
    userRoles.has(u4); // false
    userRoles.get(u4); // undefined // 존재하지 않는 키에 get()을 호출하면 반환
</br>

(4) 맵에 이미 존재하는 키에 `set()`을 호출하면 값이 교체된다.
</br>

    userRoles.get(u1); // 'User'
    userRoles.set(u1, 'Admin');
    userRoles.get(u1); // 'Admin'
</br>

(5) `size` 프로퍼티는 맵의 요소 숫자를 반환한다.
</br>

    userRoles.size; // 3
</br>

(6) `keys()` 메서드는 맵의 키, `values()` 메서드는 값, `entries()` 메서드는 첫 번째 요소가 키이고 두 번째 요소가 값인 배열을 각각 반환
- 이들 모두 이터러블 객체를 반환하므로 `for...of` 루프 사용 가능 
</br>

    for(let u of userRoles.keys())
    console.log(u.name);

    for(let r of userRoles.values())
    console.log(r);

    for(let ur of userRoles.entries())
    console.log(`${ur[0].name}: ${ur[1]}`);

- 맵도 분해 가능하므로 분해해서 더욱 자연스러운 코드로 만들어보자
</br>

    for(let [u, r] of userRoles.entries())
    console.log(`${u.name}: ${r}`);

- `entries()` 메서드는 맵의 기본 이터레이터로, 다음과 같이 단축해서 쓸 수도 있다.
</br>

    for(let [u, r] of userRoles)
    console.log(`${u.name}: ${r}`);

- 이터러블 객체보다 배열이 필요하다면 `확산 연산자(Spread Operator)` 를 사용하자!
</br>

    [...userRoles.values()]; // [ "User", "User", "Admin" ]
</br>

(7) 맵의 일부 요소를 지우기: `delete() 메서드`
</br>

    userRoles.delete(u2);
    userRoles.size; // 2
</br>

(8) 맵의 모든 요소 지우기: `clear() 메서드`
</br>

    userRoles.clear();
    userRoles.size; // 0
    
</br>
</br>

⭐ 위크맵(WeakMap)
============

- 다음의 차이점을 제외하면 일반적인 맵(Map)과 동일
</br>

    1. 키는 반드시 객체여야 한다.
    2. 위크맵의 키는 가비지 콜렉션에 포함될 수 있다.
    3. 위크맵은 이터러블이 아니며 clear() 메서드도 없다.
</br>

- 일반적으로 자바스크립트에서는 코드 어딘가에서 객체를 참조하면 해당 객체를 메모리에 계속 유지
- 하지만 위크맵에서는 가비지 콜렉션 중인 객체를 노출할 위험이 크기 때문에 메모리에 유지하지 않는다.
- 따라서 위크맵은 `이터러블(Iterable)`이 될 수 없다.
- 위크맵의 이러한 특성은 객체 인스턴스의 전용(Private)키를 저장하기에 알맞다.

</br>

    const SecretHolder = (function() {
        const secrets = new WeakMap();
        return class {
            setSecret(secret) {
                secrets.set(this, secret);
            }
            getSecret() {
                return secrets.get(this);
            }
        }
    })();
