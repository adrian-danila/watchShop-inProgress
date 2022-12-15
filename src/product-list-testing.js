
let products = [];
let productsPerPage = 5;
let numberPage = 1;
let searchTerm = '';
let sortPriceAsc = true;
const searchButton = document.querySelector('.search-button');
const resultsSelect = document.querySelector('.results-select');

function generateProductHTML({id, image, name, price}) {
    return `
        <div class="product-card-wrapper" data-id=${id}>
            <div class="product-card">
                <img class="product-image" src="${image}" alt="${name}">
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

async function addProductsToContainer() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = "";

    products = await getProducts();
    
    products = products.filter((product) => product.name.includes(searchTerm));
    
    products.map((product, index) => {
        if(index < productsPerPage)
            productsContainer.innerHTML += generateProductHTML(product);
    });
}

searchButton.addEventListener('click', async function() {
    const searchInput = document.querySelector('.search-input');
    searchTerm = searchInput.value;
    await addProductsToContainer();
});

resultsSelect.addEventListener('change', async function(event) {
    productsPerPage = event.target.value;
    addProductsToContainer();
});

window.addEventListener('DOMContentLoaded', async function() {
    await addProductsToContainer();
});