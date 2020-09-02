const initalState = {
  totalCase: 0,
  totalDeath: 0,
  totalRecovered: 0,
  newCase: 0,
  newDeath: 0,
  critical: 0,
  active: 0,
  countryData: [],
};
export default worldReducer = (state = initalState, action) => {
  switch (action.type) {
    case "fetch":
      const {
        countryData,
        totalCase,
        totalDeath,
        totalRecovered,
        newCase,
        newDeath,
        critical,
        active,
      } = action;
      return {
        totalCase: totalCase,
        totalDeath: totalDeath,
        totalRecovered: totalRecovered,
        newCase: newCase,
        newDeath: newDeath,
        critical: critical,
        active: active,
        countryData,
      };
      break;

    default:
      return state;

      break;
  }
};
