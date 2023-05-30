const myFizzBuzz = require('./myFizzBuzz');

describe('Testes myFizzBuzz', () => {
  it('Caso "num" seja divisível por 3 e 5, retorna "fizzbuzz"', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });
  it('Caso "num" seja divisível apenas por 3, retorna "fizz"', () => {
    expect('fizz').toBe(myFizzBuzz(18));
  });
  it('Caso "num" seja divisível apenas por 5, retorna "buzz"', () => {
    expect('buzz').toBe(myFizzBuzz(20));
  });
  it('Caso "num" não seja divisível por 3 e nem por 5, retorna o próprio "num"', () => {
    expect(8).toBe(myFizzBuzz(8));
  });
  it('Caso "num" não for um número, retorna false', () => {
    expect(false).toBe(myFizzBuzz('batata'));
  });
});