require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('1º - Verifica se fetchProducts é uma função', () => {
    expect.assertions(1);
  expect(typeof fetchProducts).toBe('function');
});

  it('2º - Verifica se passar o parametro "computador", a função fetchProducts é chamada', async () => {
    expect.assertions(1);
  await fetchProducts('computador');
  expect(fetch).toHaveBeenCalled();
  });

  it('3º - Verifica se passar o parametro "computador", a função fetchProducts é chamada a função fetch utiliza o endpoint', async () => {
    expect.assertions(1);
  await fetchProducts('computador');
  expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  });

  it('4º - Verifica se o retorno da função fetchProducts com o argumento "computador", se tem uma estrutura de dados igual ao computadorSearch, que já está importado', async () => {
    expect.assertions(1);
   const productTest =  await fetchProducts('computador');
   expect(productTest).toEqual(computadorSearch);
  });

  it('5º - Verifica se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try {
      await fetchProducts();
    } catch (e) {
      expect(e).toEqual(new Error("You must provide an url"));
    }
  });
});
