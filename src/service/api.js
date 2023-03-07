import axios from "axios";

const URL_BASA = 'https://pixabay.com/api/'
const key = '34091250-f9712553eb000eb19daf1218a'

async function fetchData(q, page) {
    try {
    const resp = await axios.get(
        `${URL_BASA}?key=${key}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
      );
      return resp.data.hits;
    } catch (error) {
        console.error(error);
    }
}

export { fetchData };