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
productArticle.classList.add("articleClass");
nameEl.classList.add("nameElClass");
priceEl.classList.add("priceElClass");

nameEl.textContent = name;
imgEl.src = avatar;
buttonElText.textContent = "View More";
buttonElText.href =`product-details.html?id=${id}`;

productArticle.appendChild(imgEl);
productArticle.appendChild(nameEl);
productsContainer.appendChild(productArticle);
priceEl.textContent = price;
productArticle.appendChild(priceEl);
productArticle.appendChild(buttonEl);
buttonEl.appendChild(buttonElText);
}

const {avatar, product_name, product_price,id} = products;

// METHOD 1

// products.forEach((product) => {
//     createProducts(product.avatar, product.product_name, product.product_price);
// });


// METHOD 2

// for (const product of products) {
//     const price_lei = `${product.product_price} ` + '€';
//     createProducts(product.avatar,product.product_name,price_lei);
// }


function generateProducts(productsL) {
    productsContainer.innerHTML = ''; // Erase container and after render the results
    for (const product of productsL ) {
        createProducts(product.avatar, product.product_name, product.product_price, product.id);
    }
}
generateProducts(products);

// ---------Filter products----------------------------

const filterInput = document.getElementById('filter_users');


filterInput.addEventListener("change", (e) => {
    const filterCriteria = e.target.value;

    if(filterCriteria !== '') {
        const filteredProducts = products.filter((product) => {
            return product.product_name
            .toLocaleLowerCase()
            .startsWith(filterCriteria);
        });
        generateProducts(filteredProducts);
    } else {
        generateProducts(products);
    }
   
});

  // console.log(filteredUsers);

    // productsContainer.innerHTML = ''; // Erase container and after render the results
    // for (const product of filteredUsers ) {
    //     const name = `${products.product_name} ${products.product_price}`;
    //     createProducts(product.avatar, product.product_name, product.product_price);
    // }
    // console.log(filteredUsers);


// ------------------------------------------------------


// Sort prices Low to High and High to Low

const sortingSelection = document.getElementById('sorting');

sortingSelection.addEventListener('change', (e) => {
    // console.log(e.target.value);
    let sorted;

    const sortingValue = e.target.value;
    if (sortingValue === "price-az") {
        //sort value from low to high value
        sorted = [...products].sort((a,b) =>{
            return a.product_price < b.product_price
             ? -1 
             : a.product_price > b.product_price 
             ? 1 
             : 0;
        });
        //sort prices from high value to low 
    } else if (sortingValue === "price-za") {
        sorted = [...products].sort((a,b) =>{
            return a.product_price > b.product_price
             ? -1
             : a.product_price < b.product_price 
             ? 1 
             : 0;
        });
    } else {
        sorted = products;
    }
    //rend the result
    generateProducts(sorted);
});


// ----------------------------------------------------------------

//Products Pagination

const itemPerPage = 8;
let currentPage = 1;

generateProducts([...products].splice(0,itemPerPage));

// console.log(products);   // make a copy with [...] to keep all products 

const nextButton = document.getElementById('next_button');
const prevButton = document.getElementById('prev_button');

nextButton.addEventListener('click', () => {
    const currentIndex = currentPage *itemPerPage
    const productFP = [...products].splice(currentIndex, itemPerPage);
    generateProducts(productFP);
    currentPage++;
    
});
