const querySelector = (tag) => document.querySelector(tag);
const querySelectorAll = (tag) => document.querySelectorAll(tag);

const loading = querySelector(".loading__image");
const loadingSearch = querySelector(".header__form");
const header = querySelector(".header");
const pokemonUl = querySelector(".pokemonList");

const isLoading = () => {
  loading.classList.toggle("hidden");
  loadingSearch.classList.toggle("hidden");
  pokemonUl.classList.toggle("hidden");

  if (!loadingSearch.classList.contains("hidden")) {
    header.style.justifyContent = "space-between";
  } else {
    header.style.justifyContent = "center";
  }
};

export { querySelector, isLoading, querySelectorAll };
