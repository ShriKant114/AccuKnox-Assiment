import { createSlice } from "@reduxjs/toolkit";
import { initialCategories } from "../data/dashboardData";

const widgetSlice = createSlice({
  name: "widgets",

  initialState: initialCategories,
  reducers: {

    // add widget
    addWidget: (state, action) => {
      const { category, widgetName, widgetText } = action.payload;
      if (!state[category]) state[category] = [];
      state[category].push({
        id: Date.now(),
        widgetName,
        widgetText,
      });
    },

    // delete widget
    deleteWidget: (state, action) => {
      const { category, id } = action.payload;
      state[category] = state[category].filter((w) => w.id !== id);
    },
  },
});


export const { addWidget, deleteWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
