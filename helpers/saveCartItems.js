const saveCartItems = (i) => {
  localStorage.setItem('addCart', i);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
