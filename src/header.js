function getHeaderHTML() {
    return `
    <!-- Header -->
        <header>
            <div class="container">
                <div class="logo">
                    <a href="/index.html">
                        <i class="fa-solid fa-clock"></i>
                        <span>Watch Shop</span>
                    </a>
                </div>
                <div class="wrapper">
                    <ul>
                        <li>
                            <a href="/cart.html">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>Your Cart</span>
                            </a>
                        </li>
                        <li>
                            <a href="/sign-up.html">
                                <i class="fa-solid fa-user"></i>
                                <span>Register</span>
                            </a>
                        </li>
                        <li>
                            <a href="/login.html">
                                <i class="fa-solid fa-right-to-bracket"></i>
                                <span>Login</span>
                            </a>
                        </li>
                        <li>
                            <i class="fa-solid fa-bars"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    `
}


function addHeaderHTML() {
    const container = document.querySelector('.container');
    container.innerHTML = getHeaderHTML() + container.innerHTML;
}

function updateShoppingCartQuantity() {
    const shoppingCartQuantitySpan = document.querySelector(".shopping-cart-quantity");
    shoppingCartQuantitySpan.textContent = getTotalQuantityLS();
}

function addEventListenerHamburgerIcon() {
    const hamburgerIcon = document.querySelector('header ul li:last-of-type i');
    const nav = document.querySelector('nav');

    hamburgerIcon.addEventListener('click', function () {
        if (nav.classList.contains('show')) {
            nav.classList.remove('show');
        }
        else {
            nav.classList.add('show');
        }
    });
    
}

addHeaderHTML();
addEventListenerHamburgerIcon();




