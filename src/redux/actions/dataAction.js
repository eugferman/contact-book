export const dataAction = (dataName) => ({
  type: "LOAD_DATA",
  payload: dataName,
});

export default dataAction;
