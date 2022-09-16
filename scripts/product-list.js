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
        product_price: '15.90$'

    },
      

    {
        id: 3,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Yellow Watch S71',
        product_price: '16.87$'

    },

    {
        id: 4,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Green Watch S31',
        product_price: '19.20$'

    },

    {
        id: 5,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Blue Watch S21',
        product_price: '17.65$'

    },

    {
        id: 6,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Red Watch S8',
        product_price: '14.53$'

    },
    
    {
        id: 7,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Grey Watch S9',
        product_price: '11.15$'

    },
    
    {
        id: 8,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Brown Watch S19',
        product_price: '19.99$'

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
        product_price: '33.40$'

    },
    
    {
        id: 11,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Green Watch S3',
        product_price: '75.90$'

    },
    
    {
        id: 12,
        avatar: 'https://i.ibb.co/kyYzm1R/images.jpg',
        product_name: 'Watch S2',
        product_price: '154.10$'

    }
    
]


//  -----------------Generate Products----------------

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

const {avatar, product_name, product_price} = products;

products.forEach((product) => {
    createProducts(product.avatar, product.product_name, product.product_price);
});


// ---------Filter products-----------

const filterInput = document.getElementById('filter_users');

filterInput.addEventListener("change", (e) => {
    const filterCriteria = e.target.value;
    const filteredUsers = products.filter(user => {
        if (user.product_name.toLocaleLowerCase().includes(filterCriteria.toLocaleLowerCase())) {
            return true;
        } else {
            return false;
        }
    })
    productsContainer.innerHTML = '';
    for (const product of filteredUsers ) {
        const name = `${products.product_name} ${products.product_price}`;
        createProducts(product.avatar, product.product_name, product.product_price);
    }
    // console.log(filteredUsers);
});

// --------------------------------------------------------------
