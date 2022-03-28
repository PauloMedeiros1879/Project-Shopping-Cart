const olList = document.querySelector('.cart__items');
const btnClean = document.querySelector('.empty-cart');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(olList.innerHTML);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  olList.appendChild(li);
  saveCartItems(olList.innerHTML);
  return li;
}

const addCart = async (event) => {
  const getItem = await fetchItem(event);
  const result = createCartItemElement({
    sku: getItem.id,
    name: getItem.title,
    salePrice: getItem.price,
  });
  olList.appendChild(result);
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));

  const btnAddCart = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  btnAddCart.addEventListener('click', () => addCart(sku));
  section.appendChild(btnAddCart);

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const listItens = async () => {
  const infoProducts = await fetchProducts('computador');
  const section = document.querySelector('.items');
  infoProducts.results.forEach((item) => {
    const itens = {
    sku: item.id,
    name: item.title,
    image: item.thumbnail,
    };
    section.appendChild(createProductItemElement(itens));
  });
};

 const getSave = () => {
   olList.innerHTML = getSavedCartItems();
 };
olList.addEventListener('click', cartItemClickListener);

const cleanCart = () => {
  olList.innerHTML = '';
  saveCartItems(olList.innerHTML);
};
btnClean.addEventListener('click', (cleanCart));

window.onload = async () => {
  await listItens();
  getSave();
 };
