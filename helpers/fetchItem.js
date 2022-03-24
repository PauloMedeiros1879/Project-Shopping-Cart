const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  try {
    const fetchId = await fetch(url);
    const data = await fetchId.json();
    return data.id;
  } catch (e) {
    return e;
  }
};
console.log(fetchItem('MLB1341706310'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
