function getProductsFromLS() {
    return JSON.parse(localStorage.getItem('products'));
}

function deleteProductFromLS(product) {
    const productsLS = getProductsFromLS();
    if(productsLS){
        const filteredProductsLS = productsLS.filter((productLS) => productLS.id !== product.id);
        localStorage.setItem('products', JSON.stringify(filteredProductsLS));
    }
}

function addProductToLS(product) {
    let productsLS = getProductsFromLS();
    if(productsLS)
    {
        const searchedProductsLS = productsLS.filter((productLS) => productLS.id === product.id);

        if(searchedProductsLS.length > 0)
        {
            const searchedProductLS = searchedProductsLS[0];
            searchedProductLS.quantity ++;
            deleteProductFromLS(searchedProductLS);
            productsLS = getProductsFromLS();
            productsLS.push(searchedProductLS);
        }
        else
        {
            product.quantity = 1;
            productsLS.push(product);
        }

        localStorage.setItem('products', JSON.stringify(productsLS));
    }
    else
    {
        product.quantity = 1;
        localStorage.setItem('products', JSON.stringify([product]));
    }
}

function getTotalQuantityLS() {
    const products = getProductsFromLS();
    return products.reduce((totalQuantity, product) => totalQuantity += product.quantity, 0);
}
