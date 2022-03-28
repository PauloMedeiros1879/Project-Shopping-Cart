const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('1º - Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('2º - Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro', () => {
    getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
