//query selectors
const userIcon = document.querySelector('.navbar-email');
const burgerIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const productDetailBar = document.querySelector('#product-detail');

const cardsContainer = document.querySelector('.cards-container');

//event listeners
userIcon.addEventListener('click', () => toggleElement(
  desktopMenu, mobileMenu, shoppingCartContainer, productDetailBar
));

burgerIcon.addEventListener('click', () => toggleElement(
  mobileMenu, desktopMenu, shoppingCartContainer, productDetailBar
));

cartIcon.addEventListener('click', () => toggleElement(
  shoppingCartContainer, desktopMenu, mobileMenu, productDetailBar
));

productDetailCloseIcon.addEventListener('click', () => closeElement(productDetailBar));

//functions
function closeBeforeOpen(menuB, menuC, menuD) {
  const isMenuBOpen = !menuB.classList.contains('inactive');
  const isMenuCOpen = !menuC.classList.contains('inactive');
  const isMenuDOpen = !menuD.classList.contains('inactive');

  if (isMenuBOpen || isMenuCOpen || isMenuDOpen) {
    menuB.classList.add('inactive');
    menuC.classList.add('inactive');
    menuD.classList.add('inactive');
  }
}

function toggleElement(menuA, menuB, menuC, menuD) {
  closeBeforeOpen(menuB, menuC, menuD);
  menuA.classList.toggle('inactive');
}

function openElement(menuA, menuB, menuC, menuD) {
  closeBeforeOpen(menuB, menuC, menuD);
  menuA.classList.remove('inactive');
}

function closeElement(element) {
  element.classList.add('inactive');
}

function renderProducts(arr) {
  for (product of arr) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.addEventListener('click', () => openElement(
    productDetailBar, desktopMenu, mobileMenu, shoppingCartContainer
  ));

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
  productImg.setAttribute('alt', product.name);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const textContainer = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;

  const nameText = document.createElement('p');
  nameText.innerText = product.name;

  const productInfoFigure = document.createElement('figure');

  const cartImg = document.createElement('img');
  cartImg.setAttribute('src', './icons/bt_add_to_cart.svg');

  cardsContainer.appendChild(productCard);
  productCard.append(productImg, productInfo);
  productInfo.append(textContainer, productInfoFigure);
  textContainer.append(productPrice, nameText);
  productInfoFigure.appendChild(cartImg);
  }
}

//array
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'TV Screen',
  price: 400,
  image: 'https://cdn.shopify.com/s/files/1/0253/6472/5856/products/SA-UN40N5200A_1200x1200.jpg?v=1607347680',
});

productList.push({
  name: 'Nintendo Switch',
  price: 300,
  image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo',
});

productList.push({
  name: 'Laptop',
  price: 900,
  image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg',
});

//function calling
renderProducts(productList);