function getProductsFromLS() {
    return JSON.parse(localStorage.getItem('products'));
}

function deleteProductFromLS(product) {
    const productsLS = getProductsFromLS();
    if(productsLS){
        // Aici ne filtram toate produsele din local storage, care au id-ul diferit de produsul nostru
        // asta inseaman ca ne raman doar produsele ce nu au id-ul produsului nostru
        const filteredProductsLS = productsLS.filter((productLS) => productLS.id !== product.id);
        // si produsele astea, care nu sunt produsul nostru primit ca parametru, le bagam in localstorage, inapoi
        // si practic asa, am scapat de produsul nostru, nu va mai fi in local storage
        localStorage.setItem('products', JSON.stringify(filteredProductsLS));
    }
}

function addProductToLS(product) {
    // De ce am folosit JSON.parse? Pentru ca in local storage totul e STRING, pare ca e JSON, dar de fapt e un string
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
