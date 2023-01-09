const initialState = {
  users: [],
};
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log({
          ...state,
          users: [...state.users, action.payload],
        })
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
