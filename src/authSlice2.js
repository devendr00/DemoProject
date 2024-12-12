import { createSlice } from "@reduxjs/toolkit";

let todoSlice1 = createSlice({
  name: "mySilce2",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmail1: (state, action) => {
      state.email = action.payload;
    },
    setPassword1: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail1, setPassword1 } = todoSlice1.actions;
export default todoSlice1.reducer;
