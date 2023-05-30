const {
  encode,
  decode
} = require('./encodeDecode.js');

  describe('Testes encodeDecode', () => {
    it('encode e decode são funções', () => {
      expect('function').toBe(typeof encode && typeof decode);
    });
    it('"a, e, i, o, u" são convertidas em 1, 2, 3, 4, 5, respectivamente', () => {
      expect('1, 2, 3, 4, 5').toBe(encode('a, e, i, o, u'));
    });
    it('"1, 2, 3, 4, 5" são convertidas em a, e, i, o, u, respectivamente', () => {
      expect('a, e, i, o, u').toBe(decode('1, 2, 3, 4, 5'));
    });
    it('Se as demais letras e números não são convetidos', () => {
      expect('bcdfghjklmnpqrstvwxyz').toBe(encode('bcdfghjklmnpqrstvwxyz'));
    });
    it('Se a string retornada tem o mesmo número de caracteres que a string passada como parâmetro', () => {
      expect(5).toBe(encode('aeiou').length && decode('12345').length)
    });
  });