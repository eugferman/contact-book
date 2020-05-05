const suma = require('./sum');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('sumar 4 + 4 es igual a 8', () => {
  expect(suma(4, 4)).toBe(8);
});