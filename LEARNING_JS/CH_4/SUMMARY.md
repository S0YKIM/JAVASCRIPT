⭐ 제어문
============

1 - while 문
--------

    let funds = 50; // 시작 조건
    
    while(funds > 1 && funds < 100) {
      funds = funds + 2; // 2보 전진
      funds = funds - 1; // 1보 후퇴
    }

-  `{ }` 안에 블록문을 쓴다.
-  제어문이 한 줄이라면 블록문을 사용하지 않아도 된다.

</br>

    while(funds > 1 && funds < 100)
      funds = funds + 2;

</br>

- 줄바꿈 없이 써도 된다.

</br>

    while(funds > 1 && funds < 100) funds = funds + 2;
    while(funds > 1 && funds < 100) { funds = funds + 2; }

</br>
</br>

2 - if else 문
-----

    const bets = { crown: 0, anchor: 0, heart: 0,
      spade: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, funds);
    if(totalBet = = = 7) {
      totalBet = funds;
      bets.heart = totalBet;
    } else {
        // 그 판에 걸 돈을 분배합니다.
    }
    funds = funds - totalBet;
    
</br>
</br>

3 - do while 문
----

- 일반적인 while 루프와 동일하지만 맨처음에는 조건을 검사하지 않고 동작을 무조건 실행한다는 점이 차이점

</br>
</br>

4 - for 루프
----

    const hand = [];
    for(let roll = 0; roll < 3; roll++) {
      hand.push(randFace());
    }

</br>
</br>

5 - if 문
----

    let winnings = 0;
    for(let die=0; die < hand.length; die++) {
        let face = hand[die];
        if(bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;

</br>
</br>

⭐ 제어문의 예외
============

-  break: 루프 중간에 빠져나감
-  continue: 루프에서 다음 단계로 바로 건너뜀
-  return: 제어문을 무시하고 현재 함수를 즉시 빠져나감 (6장)
-  throw: 예외 핸들러에서 반드시 처리해야 할 예외를 일으킴. 현재 제어문 바깥에 있어도 상관 없음 (11장)

</br>
</br>

⭐ 메타 문법
============

-  다른 문법을 설명하는 문법
-  `대괄호([ ])`: 대괄호로 감싼 것은 옵션
-  `생략 부호(... )`: ‘여기 들어갈 내용이 더 있다’는 뜻
-  단어는 플레이스홀더로 사용 (예: statement1과 statement2는 두 개의 서로 다른 문, expression은 어떤 값이 되는 것, condition은 참 같은 값 또는 거짓 같은 값으로 취급할
표현식)

</br>

1 - while 문
----

    while(condition)
        statement
    
</br>

2 - if else 문
----

    if(condition)
         statement1
    [else
        statement2]

</br>

3 - do while 문
----

    do
        statement
    while(condition);

</br>

4 - for 문
----

    for([initialization]; [condition]; [final-expression])
        statement

- 쉼표 연산자(,)로 초기화와 마지막 표현식에 여러 문을 결합 가능
</br>

    for(let temp, i=0, j=1; j<30; temp = i, i = j, j = i + temp)
        console.log(j);
        
- 조건을 생략하면 항상 참이므로 무한 루프
</br>

    for(;;) console.log("I will repeat forever!");
    
</br>
</br>

5 - switch 문
----

    switch(expression) {
        case value1:
             // expression을 평가한 결과가 value1일 때 실행
             [break;]
        case value2:
             // expression을 평가한 결과가 value2일 때 실행
            [break;]
        default:
            // expression을 평가한 결과에 맞는 것이 없을 때 실행됩니다.
            [break;]
    }
    
- 마지막 default 뒤에는 case 가 없으므로 break 를 생략해도 되지만, 항상 쓰는 습관이 좋다.
- 다음과 같이 공백 없이 쓰면 간결하게 표현 가능

</br>

    switch(totalBet) {
        case 7: totalBet = funds; break;
        case 11: totalBet = 0; break;
        case 13: totalBet = 0; break;
        case 21: totalBet = 21; break;
    }

</br>
</br>

6 - for...in 루프
----

    for(variable in object)
        statement
        
- 객체의 프로퍼티에 루프를 실행하도록 설계된 루프

</br>

    const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
    for(let prop in player) {
        if(!player.hasOwnProperty(prop)) continue;
        console.log(prop + ': ' + player[prop]);
    }

</br>
</br>

7 - for...of 루프
----

    for(variable of object)
        statement

- 배열은 물론 이터러블 객체에 모두 사용할 수 있는 범용적인 루프 (9장)
- 배열에 루프를 실행해야 하지만 각 요소의 인덱스를 알 필요는 없을 때 유용
</br>

    const hand = [randFace(), randFace(), randFace()];
    for(let face of hand)
        console.log(`You rolled...${face}!`);

- ❗ 인덱스를 알아야 하는 경우 일반적인 for 루프 사용
</br>

    const hand = [randFace(), randFace(), randFace()];
    for(let i=0; i<hand.length; i++)
        console.log(`Roll ${i+1}: ${hand[i]}`);
