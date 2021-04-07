export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  INCREASE_VISIBLE_FILMS_COUNT: `films/increasevisibleFilmsCount`,
  RESET_VISIBLE_FILMS_COUNT: `films/resetvisibleFilmsCount`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_COMMENTS: `data/loadComments`,
  CHANGE_AUTHORIZATION: `user/changeAuthorization`,
  REDIRECT_TO_ROUTE: `film/redirectToRoute`,
  CHANGE_ACTIVE_FILM: `film/changeActiveFilm`,
  RESET_CURRENT_FILM: `film/resetCurrentFilm`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  increasevisibleFilmsCount: () => ({
    type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
    payload: 8
  }),
  resetvisibleFilmsCount: () => ({
    type: ActionType.RESET_VISIBLE_FILMS_COUNT,
    payload: 8
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  changeAuthorization: (isAuthorized) => ({
    type: ActionType.CHANGE_AUTHORIZATION,
    payload: isAuthorized
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  changeActiveFilm: (activeFilmId) => ({
    type: ActionType.CHANGE_ACTIVE_FILM,
    payload: activeFilmId
  }),
  resetCurrentFilm: () => ({
    type: ActionType.RESET_CURRENT_FILM
  })
};
