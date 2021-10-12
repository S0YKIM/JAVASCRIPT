1 | JEST 설치
======


(1) package.json 생성
----

$npm init
- 초기화 커맨드로 package.json 파일 만들기

</br>


(2) Jest 설치
----

$ npm install --save-dev jest
- Jest 라이브러리를 개발 의존성으로 설치

</br>

(3) package.json 파일 수정
----

"scripts": {
   "test": "jest --watch"
 }
 
- test 스크립트를 jest 로 수정해준다
- --watch 옵션은 파일을 수정하고 저장하면 자동으로 파일의 변경을 감지하고 테스트 코드를 실행한다
- 이제부터 터미널에 npm test 를 입력하면 jest 커맨드가 실행됨


</br>


(4) 정상 설치 여부 확인하기
----

$ npm test
      > 이름@버전 test 경로
      > jest

      No tests found, exiting with code 1
      Run with `--passWithNoTests` to exit with code 0

위의 메시지가 뜨면 정상적으로 설치됨

</br>
</br>


2 | 테스트 코드 작성하기
====

(1) .js 파일 준비
----

      // myTestFile.js

      exports.sum = (a, b) => {
        return a + b;
      }

      exports.minus = (a, b) => {
        return a - b;
      }


</br>


(2) .test.js 파일 생성
----

      const myModule = require('./MyTestFile');

      describe('myModule 검증 테스트 케이스', () => {
        test('1 + 2 = 3', () => {
          expect(myModule.sum(1, 2)).toBe(3);
        });

        test('3 - 2 = 1', () => {
          expect(myModule.minus(3, 2)).toBe(1);
        });
      });


</br>


- test() 의 구조:

test("테스트 설명", () => {
  expect("검증 대상").toXxx("기대 결과");
});


- test() 대신 it() 을 사용해도 된다.

      describe("test myTestFile", () => {
        it("1 + 2 = 3", () => {
          expect(sum(1, 2)).toBe(3);
        });
      });


- describe() 는 테스트 코드를 하나의 범주로 묶는 역할을 한다.
- jest 는  ***.test.js 의 형식으로 생성된 파일을 자동으로 테스트 파일로 인식한다.


</br>


(3) Matchers
----

- toBe() 와 같은 to~ 함수들을 Matchers 라고 부르며 검증 대상이 어떠한 조건을 만족하는지 확인하는 역할을 한다.
- toBe() 외에도 toEqual() 등의 다양한 Matchers 함수가 존재한다.



</br>




3 | 테스트 코드 실행
====

터미널에 npm test 를 입력한 결과,

- 검증한 대상이 기대하는 결과와 같다면 PASS
- 그렇지 않다면 FAIL 이 뜨게 된다.




