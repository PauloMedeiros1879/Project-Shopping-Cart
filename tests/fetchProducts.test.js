require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Verifica se a função `fetchProducts` tem o comportamento esperado', () => {
  expect(typeof fetchProducts).toEqual('function');
  // expect(fetchProducts(["computador"])).toBe(fetch());
});
});
