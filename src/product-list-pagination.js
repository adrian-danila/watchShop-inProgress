// Products Pagination

const itemPerPage = 10;
let currentPage = 1;

// generateProducts([...products].splice(0,itemPerPage));

// console.log(products);   // make a copy with [...] to keep all products 

const prevButton = document.getElementById('prev_button');
const nextButton = document.getElementById('next_button');


nextButton.addEventListener('click', () => {
    const currentIndex = currentPage * itemPerPage
    const productFP = [...products].splice(currentIndex, itemPerPage);
    generateProducts(productFP);
    currentPage++;
    
});


