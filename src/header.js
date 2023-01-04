function updateShoppingCartQuantity() {
    const shoppingCartQuantitySpan = document.querySelector(".shopping-cart-quantity");
    shoppingCartQuantitySpan.textContent = getTotalQuantityLS();
    // console.log(shoppingCartQuantitySpan);

    // Sa-ti iei span-ul cu document.queryselector dupa clasa
    // iti creezi o functie in localstoarge.js care-ti returneaza cantiatea totala numita getTotalQuantityLS
}