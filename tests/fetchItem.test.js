require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('1º - Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function');
  });
  it('2º - Verifica se passar o parametro "MLB1615760527", a função fetchItem é chamada', () => {
    fetchItem("MLB1615760527");
    return expect(fetch).toHaveBeenCalled();
    });
  it('3º - Verifica se passar o parametro "MLB1615760527", a função fetchItem é chamada a função fetch utiliza o endpoint', async () => {
    fetchItem("MLB1615760527");
    return expect(fetch).toHaveBeenLastCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
   });
   it('4º - Verifica se o retorno da função fetchItem com o argumento "MLB1615760527", se tem uma estrutura de dados igual ao objeto item, que já está importado', async () => {
    const itemTest =  await fetchItem("MLB1615760527");
    expect(itemTest).toEqual(item);
   });
   it('5º - Verifica se ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try {
      await fetchItem();
    } catch (e) {
      expect(e).toEqual(new Error("You must provide an url"));
    }
  });
});
