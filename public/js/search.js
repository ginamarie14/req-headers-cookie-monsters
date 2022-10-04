//attach listener to form, link to it, user document.queryselector, redirect to search term, etc


const searchBar = async (event) => {
    event.preventDefault();

    const searchable = document.querySelector('#search-input').value.trim();

    const response = await fetch("/api/books/" + searchable)
    const data = await response.json();
    console.log(data)
    document.location.replace("/books/" + data.id);
};
const form = document.querySelector("#search-form");
form.addEventListener("submit", searchBar);