const fetchProducts = async () => {
const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
try {
  const fetchInfo = await fetch(url);
  const data = await fetchInfo.json();
  return data;
} catch (e) {
  return e;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
