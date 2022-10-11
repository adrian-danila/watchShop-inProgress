// Products Pagination

const itemPerPage = 6;
let currentPage = 1;

generateProducts([...products].splice(0,itemPerPage));

// console.log(products);   // make a copy with [...] to keep all products 

const nextButton = document.getElementById('next_button');
const prevButton = document.getElementById('prev_button');

nextButton.addEventListener('click', () => {
    const currentIndex = currentPage * itemPerPage
    const productFP = [...products].splice(currentIndex, itemPerPage);
    generateProducts(productFP);
    currentPage++;
    
});


