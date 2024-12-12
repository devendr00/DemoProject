import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
  name: "mySilce",
  initialState: {
    first: "",
    email: "",
    password: "",
  },
  reducers: {
    setName: (state, action) => {
      state.first = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword } = todoSlice.actions;
export default todoSlice.reducer;
