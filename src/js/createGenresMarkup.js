export function createGenresMarkup(genres, genre_ids) {
  // const genresName = [];
  // genres.map(genre =>
  //   genre_ids.map(el => {
  //     if (el === genre.id) {
  //       genresName.push(genre.name);
  //     }
  //   })
  // );
  const genresName = [];
  genres.map(genre =>
    genre_ids.filter(el => {
      if (el === genre.id) {
        genresName.push(genre.name);
      }
    })
  );
  //first and second

  let mar = [];
  if (!genresName.length) {
    return 'NOT genres';
  }

  if (genresName.length === 1) {
    mar.push(genresName[0]);
  }

  if (genresName.length > 1) {
    mar.push(genresName[0]);
    mar.push(genresName[1]);
  }

  if (genresName.length > 3) {
    mar.push(`<a href="#" class="card__link">Other</a>`);
    return mar.map(el => `<a href="#" class="card__link">${el}</a>`).join(' ');
  }

  const genresNameMurkup = mar
    .map(el => `<a href="#" class="card__link">${el}</a>`)
    .join(' ');

  //all genres
  // const genresNameMurkup = genresName
  //   .map(el => `<a href="">${el}</a>`)
  //   .join('');

  return genresNameMurkup;
}
