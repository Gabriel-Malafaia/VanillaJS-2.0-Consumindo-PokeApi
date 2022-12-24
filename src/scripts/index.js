import { getPokemons } from "./requests.js";
import { querySelector, querySelectorAll } from "./support.js";
const headerForm = querySelector(".header__form");
const headerInput = querySelector("#form__input");
const pokemonUl = querySelector(".pokemonList");

const { results } = await getPokemons("/pokemon");
const renderPokemons = async (array) => {
  pokemonUl.innerHTML = "";

  const defaultArray = (await getPokemons("/pokemon")).results;
  let arrayPokemons = !array ? await defaultArray : array;

  arrayPokemons.forEach(({ name, url }) => {
    const pokemonId = url.slice(array.length == 1 ? 39 : 34, -1);

    pokemonUl.insertAdjacentHTML(
      "beforeend",
      `
    <li id=${pokemonId} class='pokemonList__card'>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png" alt=${name}>
        <p>${name}</p>
    </li>
`
    );
  });
};

headerForm.addEventListener("click", async (e) => {
  e.preventDefault();
  const targetClass = e.target.classList.contains("form__submit");

  if (targetClass) {
    const inputValue = headerInput.value;
    const { forms } = await getPokemons(`/pokemon/${inputValue}`);

    if (forms) {
      return renderPokemons(forms);
    }

    renderPokemons(results);
  }
});

renderPokemons(results);
