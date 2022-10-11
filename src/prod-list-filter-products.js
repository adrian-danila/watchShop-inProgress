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