import { createSlice } from "@reduxjs/toolkit";

let todoSlice2 = createSlice({
  name: "mySilce3",
  initialState: {
    loading: false,
    userData: {},
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setLoading, setUserData } = todoSlice2.actions;
export default todoSlice2.reducer;
