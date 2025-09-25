import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./widgetSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    widgets: widgetReducer,
     search: searchReducer,
  },
});
