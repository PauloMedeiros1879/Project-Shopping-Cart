const fetchItem = (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((e) => e);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
