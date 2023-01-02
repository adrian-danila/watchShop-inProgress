
let products = [];
let productsPerPage = 10;
let numberPage = 1;
let searchTerm = '';
let sortPriceAsc = true;
const searchButton = document.querySelector('.search-button');
const resultsSelect = document.querySelector('.results-select');

function generateProductHTML({id, image, name, price}) {
    return `
        <div class="product-card-wrapper" data-id=${id}>
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img class="product-image" src="${image}" alt="${name}">
                    <div class="buttons-container">
                        <button>View details</button>
                        <button class="add-to-cart-button">Add to cart</button>
                    </div>
                </div>
                <h4 class="product-name">${name}</h4>
                <h5 class="product-price">${price}</h5>
            </div>
        </div>
    `
}

async function getProducts(){
    const response = await fetch('../data/products.json');
    return await response.json();
}

async function getProductById(id) {
    const response = await fetch('../data/products.json');
    const products = await response.json();
    const searchedProducts = products.filter((product) => product.id === Number(id));
    return searchedProducts.length > 0 ? searchedProducts[0] : null;
}

function addProduct(product) {
    addProductToLS(product);
    updateShoppingCartQuantity();
}

async function addProductsToContainer() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = "";

    products = await getProducts();
    
    products = products.filter((product) => product.name.includes(searchTerm));
    
    products.map((product, index) => {
        if(index < productsPerPage)
            productsContainer.innerHTML += generateProductHTML(product);
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    [...addToCartButtons].map((addToCartButton) => addToCartButton.addEventListener('click', async (e) => {
        // e.target ne este butonul, butonul pe care dam click, adica butonul din dom
        // exemplificare
        // console.log(e.target);
        // e.target.closest('.product-card-wrapper') cauta cel mai apropiat element cu clasa .product-card-wrapper
        // de butonul nostru
        const productCardWrapper = e.target.closest('.product-card-wrapper');
        // luam id-ul din dataset
        const productId = productCardWrapper.dataset.id;
        const product = await getProductById(productId);
        // console.log(product);
        addProduct(product);
    }));
}


// Input search 

searchButton.addEventListener('click', async function() {
    const searchInput = document.querySelector('.search-input');
    searchTerm = searchInput.value;
    await addProductsToContainer();
});

resultsSelect.addEventListener('change', async function(event) {
    productsPerPage = event.target.value;
    await addProductsToContainer();
});

window.addEventListener('DOMContentLoaded', async function() {
    await addProductsToContainer();
});

