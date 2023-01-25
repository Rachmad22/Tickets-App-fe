import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;

