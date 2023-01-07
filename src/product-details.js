//Search Input from Product Details Page

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchInput.addEventListener('keydown', function(event){
    if (event.keyCode === 13) {
        window.location.href = `${window.location.origin}/products-list.html?searchTerm=${event.target.value}`;
    }
});

searchButton.addEventListener('click', function(){
    window.location.href = `${window.location.origin}/products-list.html?searchTerm=${searchInput.value}`;
})

function preview(event)
{
    const productImage = document.querySelector('.img-big img');
    productImage.src = event.target.src;
}

function previewFunctionality()
{
    const previewImages = document.querySelectorAll('.img-preview-box img');
    [...previewImages].map((previewImage) => previewImage.addEventListener('click', preview));
}

previewFunctionality();