const fetchProducts = async (product) => {
const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
try {
  const fetchInfo = await fetch(url);
  return await fetchInfo.json();
} catch (e) {
  return e;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
