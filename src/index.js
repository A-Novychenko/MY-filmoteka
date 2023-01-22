import { fetchCards } from './js/fetch-themoviedb-API';
import { createCardMarkup } from './js/create-card-markup';
import { fetchConfig } from './js/fetch-config';

const galleryHomePage = document.querySelector('.js-gallery-home-page');

createHomePage();

async function createHomePage() {
  try {
    const { results } = await fetchCards();

    console.log(results);
    const config = await fetchConfig();
    console.log(config);
    const markup = createCardMarkup(results, config);

    // console.log(markup);

    galleryHomePage.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}
