export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  INCREASE_VISIBLE_FILMS_COUNT: `films/increasevisibleFilmsCount`,
  RESET_VISIBLE_FILMS_COUNT: `films/resetvisibleFilmsCount`,
  LOAD_FILMS: `data/loadFilms`,
  CHECK_AUTHORIZATION: `user/checkAuthorization`
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
  checkAuthorization: (isAuthorized) => ({
    type: ActionType.CHECK_AUTHORIZATION,
    payload: isAuthorized
  })
};
