import { createCardMarkup } from './js/create-card-markup';
import { fetchConfig } from './js/fetch-config';
import { fetchPopularMovie } from './js/fetch-popular-movie';
import { fetchGenres } from './js/fetch-genres';

const galleryHomePage = document.querySelector('.js-gallery-home-page');

createHomePage();

async function createHomePage() {
  try {
    const { results } = await fetchPopularMovie();
    const { genres } = await fetchGenres();
    const { images } = await fetchConfig();

    const markup = createCardMarkup(results, images, genres);

    galleryHomePage.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}
