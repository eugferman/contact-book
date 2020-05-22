const registerUserReducer = (state = "", action) => {
  switch (action.type) {
    case "LOAD_REGISTER_USER":
      return action.payload;
    default:
      return state;
  }
};

export default registerUserReducer;
