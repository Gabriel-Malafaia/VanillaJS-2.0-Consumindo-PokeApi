import api from "./axios.js";
import { isLoading } from "./support.js";

const getPokemons = async (url) => {
  isLoading();

  try {
    const response = await api.get(url);
    const { data } = response;
    return data;
  } catch (err) {
    console.error(err);
  } finally {
    isLoading();
  }
};

export { getPokemons };
