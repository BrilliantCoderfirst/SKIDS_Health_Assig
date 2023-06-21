const initialState = [];

export const userOperation = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.data];

    case "EDIT_USER":
      const { id, name, email, number, photo } = action.data;
      return state.map((items) =>
        items.id === id ? { id, name, email, number, photo } : items
      );

    case "DELETE_USER":
      return state.filter((items) => items.id !== action.id);

    default:
      return (state = []);
  }
};
