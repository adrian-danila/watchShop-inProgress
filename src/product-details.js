const products = [
    {
        "id": 1,
        "avatar": "https://i.ibb.co/jTc7KVy/black-watch-removebg-preview.png",
        "productName": "Black Watch S11",
        "productPrice": "12.90 lei"
    },

    {
        "id": 2,
        "avatar": "https://i.ibb.co/mv4xVh1/white-watch.png",
        "productName": "White Watch S13",
        "productPrice": "15.90 lei"
    },
      
    {
        "id": 3,
        "avatar": "https://i.ibb.co/t3kX9yF/yellow-removebg-preview.png",
        "productName": "Yellow Watch S71",
        "productPrice": "16.87 lei"
    },

    {
        "id": 4,
        "avatar": "https://i.ibb.co/kXd0hPz/green-watch-removebg-preview.png",
        "productName": "Green Watch S31",
        "productPrice": "19.20 lei"
    },

    {
        "id": 5,
        "avatar": "https://i.ibb.co/g4DhBD4/blue-watch-removebg-preview.png",
        "productName": "Blue Watch S21",
        "productPrice": "16.25 lei"
    },

    {
        "id": 6,
        "avatar": "https://i.ibb.co/q9f6cHB/red-watch.png",
        "productName": "Red Watch S8",
        "productPrice": "14.53 lei"
    },
    
    {
        "id": 7,
        "avatar": "https://i.ibb.co/4N9db02/grey-watch-removebg-preview.png",
        "productName": "Grey Watch S9",
        "productPrice": "11.15 lei"
    },
    
    {
        "id": 8,
        "avatar": "https://i.ibb.co/sHtX6XW/brown-watch-removebg-preview.png",
        "productName": "Brown Watch S19",
        "productPrice": "19.99 lei",
    },
    
    {
        "id": 9,
        "avatar": "https://i.ibb.co/jTc7KVy/black-watch-removebg-preview.png",
        "productName": "Black Watch S11",
        "productPrice": "11.90 lei"
    },
    
    {
        "id": 10,
        "avatar": "https://i.ibb.co/g4DhBD4/blue-watch-removebg-preview.png",
        "productName": "Blue Watch S4",
        "productPrice": "33.40 lei"
    },
    
    {
        "id": 11,
        "avatar": "https://i.ibb.co/kXd0hPz/green-watch-removebg-preview.png",
        "productName": "Green Watch S3",
        "productPrice": "75.90 lei"
    },
    
    {
        "id": 12,
        "avatar": "https://i.ibb.co/6Bk3YZ7/purple-watch-removebg-preview.png",
        "productName": "Purple Watch S2",
        "productPrice": "10.05 lei"
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

    


    // OLD CODE - First interaction



