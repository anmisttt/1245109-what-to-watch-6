export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  SET_FILMS: `films/setFilms`,
  INCREASE_VISIBLE_FILMS: `films/increaseVisibleFilms`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  setFilms: () => ({
    type: ActionType.SET_FILMS
  }),
  increaseVisibleFilms: () => ({
    type: ActionType.INCREASE_VISIBLE_FILMS,
    payload: 8
  })
};
