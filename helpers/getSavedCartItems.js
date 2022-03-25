const getSavedCartItems = () => localStorage.getItem('addCart');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
