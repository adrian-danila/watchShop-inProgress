
// Fetch data from jsonFile

let products = [];

const endpointUrl = "/data/products.json";


fetch(endpointUrl)
.then((res) => {
    return res.json();
})
.then((productsRes) => {
    products = productsRes;
    generateProducts(products);
});

//  -----------------Generate Products----------------

productsContainer = document.getElementById('products1');

function createProducts (avatar, name, price, id) {
const productArticle = document.createElement('article');
const imgEl = document.createElement('img');
const nameEl = document.createElement('div');
const priceEl = document.createElement('div');
const buttonEl = document.createElement('button');
const buttonElText = document.createElement('a');

const buttonCart = document.createElement('button');
const buttonCartText = document.createElement('a');
productArticle.classList.add("articleClass");

nameEl.classList.add("nameElClass");
priceEl.classList.add("priceElClass");
buttonCartText.classList.add("add-cart");


imgEl.src = avatar;
nameEl.textContent = name;
priceEl.textContent = price;

buttonElText.textContent = "View More";
buttonElText.href =`product-details.html?id=${id}`;
buttonCartText.textContent = "Add Cart";
buttonCartText.href="#";

productArticle.appendChild(imgEl);
productArticle.appendChild(nameEl);
productArticle.appendChild(priceEl);
productArticle.appendChild(buttonEl);
buttonEl.appendChild(buttonElText);
productArticle.appendChild(buttonCart);
buttonCart.appendChild(buttonCartText);
productsContainer.appendChild(productArticle);

//Cart function

let carts = document.querySelectorAll('.add-cart');

for (let i=0; i < carts.length;i++) {
    carts[i].addEventListener('click', () => {
       cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.nav-links span').textContent = productNumbers;
    }
}

function cartNumbers() {
    // console.log('The product clicked is', products);
    let productNumbers = localStorage.getItem('cartNumbers');
    // console.log(productNumbers);
    productNumbers = parseInt(productNumbers);
    // console.log(typeof productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.nav-links span').textContent = productNumbers;
    } else  {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.nav-links span').textContent = 1;
    }
    setItems(products);   
}

function setItems(products) {
    // console.log('inside of this function');
    // console.log('my product is', products);
    let cartItems = localStorage .getItem('productsInCart')
    cartItems = JSON.parse(cartItems);
    console.log("my Cart", cartItems);

    if(cartItems != null) {
        cartItems[products.product_name].inCart += 1;
    }

    products.inCart = 1;
        cartItems = {
        [products.product_name]: products
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

onLoadCartNumbers();


}

// const {avatar, product_name, product_price,id} = products;


function generateProducts(productsL) {
    productsContainer.innerHTML = ''; // Erase container and after render the results
    for (const product of productsL ) {
        createProducts(product.avatar, product.product_name, product.product_price, product.id);
    }
}
generateProducts(products);



