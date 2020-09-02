const initalState = {
  totalCase: 0,
  totalDeath: 0,
  totalRecovered: 0,
  newCase: 0,
  newDeath: 0,
  newRecovered: 0,
  totalTest: 0,
  active: 0,
};
export default worldReducer = (state = initalState, action) => {
  switch (action.type) {
    case "fetchNationApi":
      const {
        totalCase,
        totalDeath,
        totalRecovered,
        newCase,
        newDeath,
        active,
        totalTests,
      } = action;
      return {
        totalTests,
        active,
        newDeath,
        newCase,
        totalRecovered,
        totalDeath,
        totalCase,
      };
      break;

    default:
      return state;

      break;
  }
};
