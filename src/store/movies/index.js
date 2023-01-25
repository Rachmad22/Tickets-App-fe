import { createSlice } from "@reduxjs/toolkit";

const movie = createSlice({
  name: "movie",
  initialState: {
    data: null,
    slug: null,
  },
  reducers: {
    setDetail(state, action) {
      state.data = action.payload.data;
      state.slug = action.payload.slug;
    },
    getDetail(state) {
      return {
        data: state?.data,
        slug: state?.slug,
      };
    },
  },
});

export const { setDetail, getDetail } = movie.actions;
export default movie.reducer;
