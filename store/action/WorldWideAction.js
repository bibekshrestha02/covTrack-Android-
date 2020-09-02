import Axios from "axios";
import CountryCaseModel from "../../modal/CountryCaseModal";
export const FetchApi = () => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get(
        "https://coronavirus-19-api.herokuapp.com/countries"
      );
      const {
        active,
        cases,
        deaths,
        recovered,
        todayCases,
        todayDeaths,
        critical,
      } = data[0];
      const countryData = data.splice(1, 10).map((e) => {
        return new CountryCaseModel(
          e.country,
          e.active,
          e.deaths,
          e.recovered,
          e.cases,
          e.todayCases,
          e.todayDeaths,
          e.critical
        );
      });
      dispatch({
        type: "fetch",
        totalCase: cases,
        totalDeath: deaths,
        totalRecovered: recovered,
        newCase: todayCases,
        newDeath: todayDeaths,
        critical: critical,
        active: active,
        countryData,
      });
    } catch (error) {
      throw error;
    }
  };
};
