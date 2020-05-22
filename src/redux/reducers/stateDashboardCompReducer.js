const stateDashboardCompReducer = (state = false, action) => {
  switch (action.type) {
    case "LOAD_STATE_DASHBOARD":
      return action.payload;
    default:
      return state;
  }
};

export default stateDashboardCompReducer;
