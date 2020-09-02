import Axios from "axios";
import NewsModal from "../../modal/NewsModal";
export const FetchNews = () => {
  return async (dispatch) => {
    try {
      let result = [];
      const { data } = await Axios.get(
        "https://nepalcorona.info/api/v1/news?limit=20"
      );
      result.push(data);
      const news = result[0].data.map(
        (e) =>
          new NewsModal(
            e._id,
            e.title,
            e.summary,
            e.image_url,
            e.updated_at,
            e.url
          )
      );
      dispatch({
        type: "fetchNews",
        news,
      });
    } catch (error) {
      console.log(error);

      throw error;
    }
  };
};
