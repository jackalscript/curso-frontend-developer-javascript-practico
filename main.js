const userIcon = document.querySelector('.navbar-email');
const burgerIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideMenu = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');


userIcon.addEventListener('click', () => toggleMenus(desktopMenu, mobileMenu, asideMenu));
burgerIcon.addEventListener('click', () => toggleMenus(mobileMenu, desktopMenu, asideMenu));
cartIcon.addEventListener('click', () => toggleMenus(asideMenu, desktopMenu, mobileMenu));


function toggleMenus(menuA, menuB, menuC) {
  const isMenuBOpen = !menuB.classList.contains('inactive');
  const isMenuCOpen = !menuC.classList.contains('inactive');

  if (isMenuBOpen || isMenuCOpen) {
    menuB.classList.add('inactive')
    menuC.classList.add('inactive')
  }

  menuA.classList.toggle('inactive');
}

function renderProducts(arr) {
  for (product of arr) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

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



renderProducts(productList);

