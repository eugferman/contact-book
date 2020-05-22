const stateWelcomeCompReducer = (state = false, action) => {
  switch (action.type) {
    case "LOAD_STATE_WELCOME":
      return action.payload;
    default:
      return state;
  }
};

export default stateWelcomeCompReducer;
