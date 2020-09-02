import React from "react";
import HomeNavigation from "./navigation/HomeNavigation";
import WorlWideReducer from "./store/reducer/worldWide";
import NewsReducer from "./store/reducer/NewsReducer";
import DistrictReducer from "./store/reducer/DistrictReducer";
import ColorReducer from "./store/reducer/ColorReducer";
import NationReducer from "./store/reducer/NationWide";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
const reducer = combineReducers({
  worldWideData: WorlWideReducer,
  NewsData: NewsReducer,
  DistrictData: DistrictReducer,
  Colors: ColorReducer,
  Nation: NationReducer,
});
const store = createStore(reducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <HomeNavigation />
    </Provider>
  );
}
