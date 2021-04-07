export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  INCREASE_VISIBLE_FILMS_COUNT: `films/increaseVisibleFilmsCount`,
  RESET_VISIBLE_FILMS_COUNT: `films/resetvisibleFilmsCount`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_CURRENT_FILM: `data/loadCurrentFilm`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  LOAD_COMMENTS: `data/loadComments`,
  RESET_CURRENT_FILM: `data/resetCurrentFilm`,
  CHANGE_AUTHORIZATION: `user/changeAuthorization`,
  REDIRECT_TO_ROUTE: `film/redirectToRoute`,
  CHANGE_ACTIVE_FILM: `film/changeActiveFilm`
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});
export const increaseVisibleFilmsCount = () => ({
  type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
  payload: 8
});
export const resetvisibleFilmsCount = () => ({
  type: ActionType.RESET_VISIBLE_FILMS_COUNT,
  payload: 8
});
export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});
export const loadCurrentFilm = (film) => ({
  type: ActionType.LOAD_CURRENT_FILM,
  payload: film
});
export const loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: film
});
export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});
export const changeAuthorization = (isAuthorized) => ({
  type: ActionType.CHANGE_AUTHORIZATION,
  payload: isAuthorized
});
export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
export const changeActiveFilm = (activeFilmId) => ({
  type: ActionType.CHANGE_ACTIVE_FILM,
  payload: activeFilmId
});
export const resetCurrentFilm = () => ({
  type: ActionType.RESET_CURRENT_FILM
});

