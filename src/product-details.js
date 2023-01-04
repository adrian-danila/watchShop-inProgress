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

