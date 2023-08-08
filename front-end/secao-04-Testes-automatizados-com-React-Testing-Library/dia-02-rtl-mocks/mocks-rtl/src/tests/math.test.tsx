import { vi } from 'vitest';
import * as math from '../utils/math';

/*  test('#somar #subtrair', () => {
  vi.mock('../utils/math', () => ({
    somar: vi.fn((a: number, b: number) => a + b),
    subtrair: vi.fn((a: number, b: number) => a - b)
  }))

  math.somar(1, 2)
  math.subtrair(1, 2)

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);

  expect(math.subtrair).toHaveBeenCalled();
})  */


/* test('#multiplicar #dividir', () => {
  const mockedMath = {
    multiplicar: vi.fn(),
    dividir: vi.fn()
  }

  vi.mock('../utils/math', () => mockedMath)

  mockedMath.multiplicar.mockImplementation((a: number, b: number) => a * b)
  mockedMath.dividir.mockImplementation((a: number, b: number) => a / b)

  mockedMath.multiplicar(1, 2);
  mockedMath.dividir(1, 2);

  expect(mockedMath.multiplicar).toHaveBeenCalled()
  expect(mockedMath.multiplicar).toHaveBeenCalledTimes(1);
  expect(mockedMath.multiplicar).toHaveBeenCalledWith(1, 2);
  expect(mockedMath.multiplicar(1, 2)).toBe(2);

  expect(mockedMath.dividir).toHaveBeenCalled()

}) */

test('#spyOnSomar', () => {
  const mockSomar = vi.spyOn(math, 'somar')
  const result = math.somar(1,2)

  expect(mockSomar).toHaveBeenCalled()
  expect(result).resolves.toBe(3)

})
