const userToEditReducer = (state = "", action) => {
  switch (action.type) {
    case "LOAD_USER_TO_EDIT":
      return action.payload;
    default:
      return state;
  }
};

export default userToEditReducer;
