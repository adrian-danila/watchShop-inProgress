const products = [
    {
        id: 1,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Black Watch S11",
        product_price: "12.90"

    },

   
    {
        id: 2,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "White Watch S13",
        product_price: "15.90"

    },
      

    {
        id: 3,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Yellow Watch S71",
        product_price: "16.87"

    },

    {
        id: 4,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Green Watch S31",
        product_price: "19.20"

    },

    {
        id: 5,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Blue Watch S21",
        product_price: "16.25"

    },


    {
        id: 6,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Red Watch S8",
        product_price: "14.53"

    },
    
    {
        id: 7,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Grey Watch S9",
        product_price: "11.15"

    },
    
    {
        id: 8,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Brown Watch S19",
        product_price: "19.99"

    },
    
    {
        id: 9,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Black Watch S11",
        product_price: "11.90"

    },
    
    {
        id: 10,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Blue Watch S4",
        product_price: "33.40"

    },
    
    {
        id: 11,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Green Watch S3",
        product_price: "75.90"

    },
    
    {
        id: 12,
        avatar: "https://i.ibb.co/kyYzm1R/images.jpg",
        product_name: "Watch S2",
        product_price: "10.05"

    }
    
]

const productsContainer = document.getElementById("details");
const productsContainer2 = document.getElementById("details2");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const product = products.find((product) => product.id == productId);
// console.log(product);

function createProducts (avatar, name, price) {

    const productArticle = document.createElement("article");
    const infoArticle = document.createElement('article');
    const detailsInfo = document.createElement('article');

    

    const imgEl = document.createElement("img");
    const nameEl = document.createElement("div");
    const priceEl = document.createElement("div");
    
    const buttonEl = document.createElement("button");
    const detailsEl = document.createElement('h1');
    const infoEl = document.createElement('h1');

    
    nameEl.textContent = name;
    imgEl.src = avatar;
    priceEl.textContent = price;
    buttonEl.textContent = "Add to cart";
    detailsEl.textContent = "Details";
    infoEl.textContent = "Info & Stats";


    
    
    
    productArticle.appendChild(imgEl);
    infoArticle.appendChild(nameEl);
    infoArticle.appendChild(priceEl);
    infoArticle.appendChild(buttonEl);
    infoArticle.appendChild(detailsEl);
    infoArticle.appendChild(infoEl);
    
    
    productsContainer.appendChild(productArticle);
    productsContainer.appendChild(infoArticle);
    productsContainer2.appendChild(detailsInfo);


    infoArticle.classList.add('infoArt');
    productArticle.classList.add('imgArt');
    nameEl.classList.add('productName');
    priceEl.classList.add('productPrice');
    buttonEl.classList.add('buttonAddCart');
    detailsEl.classList.add('detailsTxt');
    infoEl.classList.add('infoTxt');
    detailsInfo.classList.add('detailsInfo');
   

    // return productArticle;
    }
    
    const {avatar, product_name, product_price} = product;

    const productEl = createProducts(avatar,product_name, product_price);

    productsContainer.appendChild(productEl);
    // console.log(productEl);

    




