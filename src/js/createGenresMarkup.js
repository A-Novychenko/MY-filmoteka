export function createGenresMarkup(genres, genre_ids) {
  const genresName = [];
  genres.map(genre =>
    genre_ids.map(el => {
      if (el === genre.id) {
        genresName.push(genre.name);
      }
    })
  );
  const genresNameMurkup = genresName
    .map(el => `<a href="">${el}</a>`)
    .join('');

  return genresNameMurkup;
}
