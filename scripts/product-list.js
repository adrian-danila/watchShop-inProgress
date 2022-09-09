const products = [
    {
        id: 1,
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        product_name: 'Watch S1',
        product_price: '11.90$'

    },

   
    {
        id: 2,
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        product_name: 'Watch S1',
        product_price: '11.90$'

    },
      

    {
        id: 3,
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        product_name: 'Watch S1',
        product_price: '11.90$'

    },

    {
        id: 4,
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        product_name: 'Watch S1',
        product_price: '11.90$'

    },

    {
        id: 5,
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        product_name: 'Watch S1',
        product_price: '11.90$'

    },

    {
        id: 6,
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        product_name: 'Watch S1',
        product_price: '11.90$'

    }
]


const containerProducts = document.getElementById('products1');

function createWatches(avatar, name, price, button) {
    const productContainer = document.createElement('div');
    const avatarElement = document.createElement('img');
    const nameElement = document.createElement('div');
    const priceElement = document.createElement('div');
    const buttonElement = document.createElement('button');
    
    avatarElement.src = avatar;
    nameElement.textContent = name;
    priceElement.textContent = price;
    buttonElement.buttonElement = button;
    buttonElement.textContent = "Add to cart"
    

    productContainer.appendChild(avatarElement);
    productContainer.appendChild(nameElement);
    productContainer.appendChild(priceElement);
    productContainer.appendChild(buttonElement);
    products1.appendChild(productContainer);

}




const profil1 = createWatches('https://reqres.in/img/faces/2-image.jpg', 'Misbona', '76$');
createWatches('https://reqres.in/img/faces/2-image.jpg', 'Misbona', '76$');
createWatches('https://reqres.in/img/faces/2-image.jpg', 'Misbona', '76$');
createWatches('https://reqres.in/img/faces/2-image.jpg', 'Misbona', '76$');
createWatches('https://reqres.in/img/faces/2-image.jpg', 'Misbona', '76$');
createWatches('https://reqres.in/img/faces/2-image.jpg', 'Misbona', '76$');
createWatches('https://reqres.in/img/faces/2-image.jpg', 'Misbona', '76$');


