import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./authSlice";
import todoSlice1 from "./authSlice2";
import todoSlice2 from "./commonSlice";
import todoSlice3 from "./addTask";

const store = configureStore({
  reducer: {
    mySlice: todoSlice,
    mySlice1: todoSlice1,
    mySlice2: todoSlice2,
    mySlice4: todoSlice3,
  },
});

export default store;
