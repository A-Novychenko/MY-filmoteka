import { createGenresMarkup } from './createGenresMarkup';

export function createCardMarkup(date, images, genres) {
  const { base_url, poster_sizes } = images;

  const destopSize = poster_sizes.includes('w780') ? 'w780' : 'original';
  const tabletSize = poster_sizes.includes('w500') ? 'w500' : 'original';
  const mobileSize = poster_sizes.includes('w342') ? 'w342' : 'original';

  const descktopBaseUrl = base_url + destopSize;
  const tabletBaseUrl = base_url + destopSize;
  const mobileBaseUrl = base_url + destopSize;
  const originalBaseUrl = base_url + 'original';

  return date.reduce(
    (acc, { title, poster_path, vote_average, release_date, genre_ids }) => {
      const path = poster_path === null ? '' : poster_path;

      const genresNameMurkup = createGenresMarkup(genres, genre_ids);

      return (
        acc +
        `<li class="card">
            <a href="" class="card__link">
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
        }" 
                        alt="${title}" class="card__img" loading="lazy">
                    </picture>
                </div>
                <div class="card__info">
                    <h2 class="card__title">${title}</h2>
                    <div class="card__inner">
                        <p class="card__genres">${genresNameMurkup}</p>
                        <p class="card__date">${release_date}</p>
                        <p class="card__rating">${vote_average}</p>
                    </div>
                </div>
            </a>
        </li>`
      );
    },
    ''
  );
}
