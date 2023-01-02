// Sort prices Low to High and High to Low



const sortingSelection = document.getElementById('sorting-select');

sortingSelection.addEventListener('change', (e) => {
    // console.log(e.target.value);
    const sortingValue = e.target.value;
    if (sortingValue === "price-az") {
        let sorted;
        //sort value from low to high value
        sorted = [...products].sort((a,b) =>{
            return a.price < b.price
             ? -1 
             : a.price > b.price 
             ? 1 
             : 0;
        });
        //sort prices from high value to low 
    } else if (sortingValue === "price-za") {
        sorted = [...products].sort((a,b) =>{
            return a.price > b.price
             ? -1
             : a.price < b.price 
             ? 1 
             : 0;
        });
    } else {
        sorted = products;
    }
});