export function createCardMarkup(date, { images }) {
  return date.reduce(
    (acc, { title, poster_path, vote_average, release_date, genre_ids }) => {
      return (
        acc +
        `<li class="card">
            <a href="" class="card__link">
                <div class="card__wrap">
                    <img src="${
                      images.base_url + images.poster_sizes[3] + poster_path
                    }" alt="" class="card__img">
                </div>
                <div class="card__info">
                    <h2 class="card__title">${title}</h2>
                    <p class="card__genries"></p>
                    <p class="card__date">${release_date}</p>
                    <p class="card__rating">${vote_average}</p>
                </div>
            </a>
        </li>`
      );
    },
    ''
  );
}

// ${genre_ids}
