// async function getProducts() {
//     const response = await fetch('../data/products.json');
//     const products = await response.json();
//     return products;
// };

// function generateProductHTML({id, image, name, price}) {
//     return `
//         <div class="product-card-wrapper" data-id=${id}>
//             <div class="product-card">
//                 <div class="product-image-wrapper">
//                     <img class="product-image" src="${image}" alt="${name}">
//                     <div class="buttons-container">
//                         <a href="/product-details.html" class="view">View details</a>
//                         <button class="add-to-cart-button">Add to cart</button>
//                     </div>
//                 </div>
//                 <h4 class="product-name">${name}</h4>
//                 <h5 class="product-price">${price} Lei</h5>
//             </div>
//         </div>
//     `
// }

// function generateContainerHTML() {
//     return `<div class="products-container></div>`
// }

// function appendBefore(node, child)
// {
//     const nodeInnerHTML = node.innerHTML;
//     node.innerHTML = "";
//     node.appendChild(child);
//     node.innerHTML += nodeInnerHTML;
// }

// function generateContainer() {
//     const body = document.querySelector('body');
//     const container = document.createElement('div');
//     container.classList.add('products-container');
//     appendBefore(body, container);
// }

// async function generateProducts() {
//     const productContainer = document.querySelector(".products-container");
//     const products = await getProducts();
//     products.map((product) => productContainer.innerHTML += generateProductHTML(product));
// }

// generateContainer();
// generateProducts();


/*
    Creaza utilizand createElement o functie
    Ce primeste ca si parametru un obiect (dictionar, {})
    // Exemplu:
    // {
    //     component: 'div',
    //     styles: {
    //         color: 'red',
    //         backgroundColor: 'yellow'
    //     },
    //     width: '300px',
    //     classList: ['product-name'],
    //     innerHTML: 'Golden watch'
    // }

    Exemplu:
    {        
        component: 'h4',
        styles: {
            color: 'red'
        },
        classList: ['product-name'],
        innerHTML: 'Golden watch'
    }
*/

function createElement({component, id, classList}) {
    const element = document.createElement(component);
    
    element.setAttribute('id', id);

    classList.map((c) => element.classList.add(c));
    
    return element;
}

console.log(createElement({
    component: 'h4',
    id: 'product-name',
    classList: ['product-name', 'text']
}))
