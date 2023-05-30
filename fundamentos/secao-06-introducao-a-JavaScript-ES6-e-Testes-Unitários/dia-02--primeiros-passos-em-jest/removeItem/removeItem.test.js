const removeItem = require('./removeItem');

describe('Testes removeItem', () => {
  it('Verifica se o retorno de removeItem([1, 2, 3, 4], 3) é [1, 2, 4]', () => {
    expect([1, 2, 4]).toEqual(removeItem([1, 2, 3, 4], 3));
  });
  it('Verifica se não retorna [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(removeItem([1, 2, 3, 4], 3));
  });
  it('Verifica se o retorno de removeItem([1, 2, 3, 4], 5) é [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).toEqual(removeItem([1, 2, 3, 4], 5));
  });
});
