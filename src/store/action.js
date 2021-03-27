export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  SET_FILMS: `films/setFilms`,
  INCREASE_VISIBLE_FILMS_COUNT: `films/increasevisibleFilmsCount`,
  RESET_VISIBLE_FILMS_COUNT: `films/resetvisibleFilmsCount`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  setFilms: () => ({
    type: ActionType.SET_FILMS
  }),
  increasevisibleFilmsCount: () => ({
    type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
    payload: 8
  }),
  resetvisibleFilmsCount: () => ({
    type: ActionType.RESET_VISIBLE_FILMS_COUNT,
    payload: 8
  })
};
