// Sort prices Low to High and High to Low



const sortingSelection = document.getElementById('sorting-select');

sortingSelection.addEventListener('change', (e) => {
    // console.log(e.target.value);
    const sortingValue = e.target.value;
    console.log(sortingValue);
    if (sortingValue === "price-az") {
        //sort value from low to high value
        products = [...products].sort((a, b) => {
            return a.price < b.price
                ? -1
                : a.price > b.price
                    ? 1
                    : 0;
        });
        //sort prices from high value to low 
    }
    if (sortingValue === "price-za") {
        products = [...products].sort((a, b) => {
            return a.price > b.price
                ? -1
                : a.price < b.price
                    ? 1
                    : 0;
        });
    }
});