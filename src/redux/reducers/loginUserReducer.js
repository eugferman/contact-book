const loginUserReducer = (state = { email: "", password: "" }, action) => {
  switch (action.type) {
    case "LOAD_LOGIN_USER":
      return action.payload;
    default:
      return state;
  }
};

export default loginUserReducer;
