const fetchItem = (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((e) => e);
};
console.log(fetchItem('MLB1341706310'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
