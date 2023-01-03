let myProducts = function(id) {
fetch('../data/products.json')
.then(response =>response.json())
.then(data => {
    console.log(data);
});
};
myProducts();