const myModule = require('./MyTestFile');

describe('myModule 검증 테스트 케이스', () => {
  test('1 + 2 = 3', () => {
    expect(myModule.sum(1, 2)).toBe(3);
  });

  test('3 - 2 = 1', () => {
    expect(myModule.minus(3, 2)).toBe(1);
  });
});