export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  GET_FILMS: `films/getFilms`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getFilms: () => ({
    type: ActionType.GET_FILMS
  })
};
