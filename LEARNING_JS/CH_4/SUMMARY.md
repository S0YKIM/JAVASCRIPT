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

    let funds = 50; // 시작 조건
    
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
