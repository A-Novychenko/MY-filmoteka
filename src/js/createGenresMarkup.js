export function createGenresMarkup(genres, genre_ids) {
  const genresName = [];
  genres.map(genre =>
    genre_ids.filter(el => {
      if (el === genre.id) {
        genresName.push(genre.name);
      }
    })
  );

  let mar = [];
  if (!genresName.length) {
    return;
  }

  if (genresName.length === 1) {
    mar.push(genresName[0]);
  }

  if (genresName.length > 1) {
    mar.push(genresName[0]);
    mar.push(genresName[1]);
  }

  if (genresName.length > 3) {
    return (
      mar.map(el => `<span class="card__genre">${el}</span>`).join(', ') +
      `, ` +
      `<a class="card__genre card__genre_link">Other</a>`
    );
  }

  const genresNameMurkup = mar
    .map(el => `<span class="card__genre">${el}</span>`)
    .join(', ');

  return genresNameMurkup;
}

// export function createGenresMarkup(genre_ids, genres) {
//   return genre_ids.map(result => {
//     const arrayOfGenresName = result.genre_ids.map(
//       id => genres.find(genre => genre.id === id).name
//     );
//     return {
//       ...result,
//       allGenres: arrayOfGenresName.join(', '),
//       previewGenres: `${arrayOfGenresName.slice(0, 2).join(', ')}${
//         arrayOfGenresName.length > 2 ? `, ...` : ''
//       }`,
//     };
//   });
// }

// export function getFilteredMovies(arr, genres) {
//   return arr.map(result => {
//     const arrayOfGenresName = result.genre_ids.map(
//       id => genres.find(genre => genre.id === id).name
//     );
//     return {
//       ...result,
//       allGenres: arrayOfGenresName.join(', '),
//       previewGenres: `${arrayOfGenresName.slice(0, 2).join(', ')}${
//         arrayOfGenresName.length > 2 ? `, ...` : ''
//       }`,
//     };
//   });
// }
