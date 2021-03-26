export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  SET_FILMS: `films/setFilms`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  setFilms: () => ({
    type: ActionType.SET_FILMS
  })
};
