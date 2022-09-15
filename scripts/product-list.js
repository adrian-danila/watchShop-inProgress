const products = [
    {
        id: 1,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Black Watch S11',
        product_price: '121.90$'

    },

   
    {
        id: 2,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'White Watch S13',
        product_price: '11.90$'

    },
      

    {
        id: 3,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Yellow Watch S71',
        product_price: '11.90$'

    },

    {
        id: 4,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Green Watch S31',
        product_price: '11.90$'

    },

    {
        id: 5,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Blue Watch S21',
        product_price: '11.90$'

    },

    {
        id: 6,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Red Watch S8',
        product_price: '11.90$'

    },
    
    {
        id: 7,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Grey Watch S9',
        product_price: '11.90$'

    },
    
    {
        id: 8,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Brown Watch S19',
        product_price: '11.90$'

    },
    
    {
        id: 9,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Black Watch S11',
        product_price: '11.90$'

    },
    
    {
        id: 10,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Blue Watch S4',
        product_price: '11.90$'

    },
    
    {
        id: 11,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Green Watch S3',
        product_price: '11.90$'

    },
    
    {
        id: 12,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Watch S2',
        product_price: '11.90$'

    }
    
]


//  -----------------Another type for genereate products

productsContainer = document.getElementById('products1');

function createProducts (avatar, name, price) {
const productArticle = document.createElement('article');
const imgEl = document.createElement('img');
const nameEl = document.createElement('div');
const priceEl = document.createElement('div');

nameEl.textContent = name;
imgEl.src = avatar;

productArticle.appendChild(imgEl);
productArticle.appendChild(nameEl);
productsContainer.appendChild(productArticle);
priceEl.textContent = price;
productArticle.appendChild(priceEl);


}

products.forEach((product) => {
    createProducts(product.avatar, product.product_name, product.product_price);
});


//generate products --------------------------------

// const containerProducts = document.getElementById('products1');

// function createWatches(avatar, name, price, button) {
//     const productContainer = document.createElement('div');
//     const avatarElement = document.createElement('img');
//     const nameElement = document.createElement('div');
//     const priceElement = document.createElement('div');
//     const buttonElement = document.createElement('button');
    
//     avatarElement.src = avatar;
//     nameElement.textContent = name;
//     priceElement.textContent = price;
//     buttonElement.buttonElement = button;
//     buttonElement.textContent = "Add to cart"
    

//     productContainer.appendChild(avatarElement);
//     productContainer.appendChild(nameElement);
//     productContainer.appendChild(priceElement);
//     productContainer.appendChild(buttonElement);
//     products1.appendChild(productContainer);

// }




// const profil1 = createWatches('https://reqres.in/img/faces/2-image.jpg', 'White Watch v1', '76$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'Black Watch v4', '12$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'Cream Watch v2', '54$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'Orange Watch v5.1', '42$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'Yellow Watch v8', '98$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'Blue Watch v10', '116$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'Red Watch v12', '254$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'Green Watch v13.2', '376$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'Grey Watch v17.5', '576$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'LightGrey Watch v8.7', '676$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'Misbona', '176$');
// createWatches('https://reqres.in/img/faces/2-image.jpg', 'Misbona', '376$');




// createProducts('https://reqres.in/img/faces/3-image.jpg', 'Watch S1','75$');



//Filter products

const filterInput = document.getElementById('filter_users');

filterInput.addEventListener("change", (e) => {
    const filterCriteria = e.target.value;
    const filteredUsers = products.filter(user => {
        return true;
    })
    console.log(filteredUsers);
});