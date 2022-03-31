const olList = document.querySelector('.cart__items');
const btnClean = document.querySelector('.empty-cart');
const totalPrice = document.querySelector('.total-price');

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

// Como tive bastante dificuldade neste requisito, optei por comentar cada linha para me situar também.
const sumValues = async () => {
  let price = 0;
  const list = await getSavedCartItems(); // Aqui retorna string;
  const priceOverral = list.split('$'); // Aqui separa;
  priceOverral.shift(); // Aqui remove o item 0;
  
  priceOverral.forEach((element) => { // Aqui percorre a array;
    price += parseFloat(element.substring(0, element.indexOf('<')));
    // Aqui o parseFloat converte, em seguida, o substring retorna partes da string, e usei o indexOf para definir a posição final da string, para que o retorno fosse apenas numeros;
  });
  totalPrice.innerText = price;
};

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(olList.innerHTML);
  sumValues();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  olList.appendChild(li);
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
  saveCartItems(olList.innerHTML);
  sumValues();
};

const addScreenLoad = () => {
  const cartScreen = document.querySelector('.cart');
  const loadTxt = document.createElement('p');
  loadTxt.className = 'loading';
  loadTxt.innerHTML = 'carregando...';
  cartScreen.appendChild(loadTxt);
};

const removeScreenLoad = async () => {
  const rmLoad = document.querySelector('.loading');
  rmLoad.remove();
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

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

const listItens = async () => {
  addScreenLoad();
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
  removeScreenLoad();
};

 const getSave = () => {
   olList.innerHTML = getSavedCartItems();
 };
olList.addEventListener('click', cartItemClickListener);

const cleanCart = () => {
  olList.innerHTML = '';
  saveCartItems(olList.innerHTML);
  sumValues();
};
btnClean.addEventListener('click', (cleanCart));

window.onload = () => {
  listItens();
  getSave();
  sumValues();
 };
