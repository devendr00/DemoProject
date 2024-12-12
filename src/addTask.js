import { createSlice } from "@reduxjs/toolkit";
import sortfun from "./genericfun";
let todoSlice3 = createSlice({
  name: "mySlice4",
  initialState: {
    title: "",
    data: [],
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setData: (state, action) => {
      const result = sortfun(action.payload, "title");
      state.data = result;
    },
  },
});

export const { setTitle, setData } = todoSlice3.actions;
export default todoSlice3.reducer;
