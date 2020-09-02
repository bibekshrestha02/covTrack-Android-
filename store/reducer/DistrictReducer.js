import Data from "../../data/districtData.json";
import DistrictModal from "../../modal/DistriceModal";
const initialState = {
  district: Data.map((e) => new DistrictModal(e._id, e.title_en, e.id)),
};

export default District = (state = initialState, action) => {
  return {
    district: state.district.sort(function (a, b) {
      var textA = a.label.toUpperCase();
      var textB = b.label.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    }),
  };
};
