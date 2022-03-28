const fetchProducts = async (items) => {
const url = `https://api.mercadolibre.com/sites/MLB/search?q=${items}`;
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
