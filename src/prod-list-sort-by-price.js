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