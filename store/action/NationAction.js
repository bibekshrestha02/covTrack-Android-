import Axios from "axios";
export const FetchApiNation = () => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get(
        "https://coronavirus-19-api.herokuapp.com/countries/Nepal"
      );
      const {
        cases,
        todayCases,
        todayDeaths,
        deaths,
        recovered,
        active,
        totalTests,
      } = data;
      dispatch({
        type: "fetchNationApi",
        totalCase: cases,
        totalDeath: deaths,
        totalRecovered: recovered,
        newCase: todayCases,
        newDeath: todayDeaths,
        active: active,
        totalTests,
      });
    } catch (error) {
      throw error;
    }
  };
};
