
let products = [];
let productsPerPage = 10;
let numberPage = 1;
let searchTerm = '';
let sortPriceAsc = null;

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const sortingSelect = document.querySelector('.sorting-select');
const resultsSelect = document.querySelector('.results-select');

function generateProductHTML({ id, image, name, price }) {
    return `
        <div class="product-card-wrapper" data-id=${id}>
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img class="product-image" src="${image}" alt="${name}">
                    <div class="buttons-container">
                        <a href="/product-details.html" class="view">View details</a>
                        <button class="add-to-cart-button">Add to cart</button>
                    </div>
                </div>
                <h4 class="product-name">${name}</h4>
                <h5 class="product-price">${price} Lei</h5>
            </div>
        </div>
    `
}

async function getProducts() {
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

function applySearchParams() {
    const params = new URLSearchParams(window.location.search);
    const paramSearchTerm = params.get('searchTerm');
    if(paramSearchTerm) 
        products = products.filter((product) => product.name.toLowerCase().includes(paramSearchTerm));
}

function filterProducts() {
    products = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

function compareAsc(a, b) {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;
}

function compareDesc(a, b) {
    if (a.price < b.price) {
        return 1;
    }
    if (a.price > b.price) {
        return -1;
    }
    return 0;
}

function sortProducts() {
    if (sortPriceAsc === true) {
        products = products.sort(compareAsc);
    }
    if (sortPriceAsc === false) {
        products = products.sort(compareDesc);
    }
}

async function addProductsToContainer() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = "";

    products = await getProducts();

    applySearchParams();
    filterProducts();
    sortProducts();

    products.map((product, index) => {
        if (index < productsPerPage)
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

searchInput.addEventListener('keydown', async function (event) {
    if (event.keyCode === 13) {
        searchTerm = event.target.value;
        await addProductsToContainer();
    }
});

searchButton.addEventListener('click', async function () {
    const searchInput = document.querySelector('.search-input');
    searchTerm = searchInput.value;
    await addProductsToContainer();
});

sortingSelect.addEventListener('change', async function (event) {
    if (event.target.value === 'default') {
        sortPriceAsc = null;
    }
    if (event.target.value === "price-asc") {
        sortPriceAsc = true;
    }
    if (event.target.value === "price-desc") {
        sortPriceAsc = false;
    }
    await addProductsToContainer();
});

resultsSelect.addEventListener('change', async function (event) {
    productsPerPage = event.target.value;
    await addProductsToContainer();
});

window.addEventListener('DOMContentLoaded', async function () {
    await addProductsToContainer();
});

