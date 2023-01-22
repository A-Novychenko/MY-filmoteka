import { createGenresMarkup } from './createGenresMarkup';
import moment from 'moment/moment';

export function createCardMarkup(date, images, genres) {
  const { secure_base_url, poster_sizes } = images;

  const destopSize = poster_sizes.includes('w780') ? 'w780' : 'original';
  const tabletSize = poster_sizes.includes('w500') ? 'w500' : 'original';
  const mobileSize = poster_sizes.includes('w342') ? 'w342' : 'original';

  const descktopBaseUrl = secure_base_url + destopSize;
  const tabletBaseUrl = secure_base_url + tabletSize;
  const mobileBaseUrl = secure_base_url + mobileSize;
  const originalBaseUrl = secure_base_url + 'original';

  return date.reduce(
    (
      acc,
      { title, id, poster_path, vote_average, release_date, genre_ids }
    ) => {
      const path = poster_path === null ? '' : poster_path;

      const genresNameMurkup = createGenresMarkup(genres, genre_ids);

      return (
        acc +
        `<li class="card">
            <div class="card__wrap">
              <picture>
                <source srcset="${
                  descktopBaseUrl + path
                }" media="(min-width: 1280px)">
                <source media="(min-width: 768px)" srcset="${
                  tabletBaseUrl + path
                }">
                <source media="(min-width: 320px)" srcset="${
                  mobileBaseUrl + path
                }">
                <img srcset="${originalBaseUrl + path}" src="${
          originalBaseUrl + path
        }" alt="${title}" class="card__img" loading="lazy">
              </picture>
            </div>
            <a href="#" data-id="${id}" class="card-link">
                <h2 class="card__title">${title}</h2>
            </a>
            <p class="card__description" data-id="${id}">
                <span class="card__genre>${
                  !genresNameMurkup ? `unknown genre` : genresNameMurkup
                } | ${
          !release_date ? 'released' : moment(release_date).format('YYYY')
        }</span>
                <span class="card__rating visually-hidden">${vote_average}</span>
            </p>
            </div>
        </li>`
      );
    },
    ''
  );
}
