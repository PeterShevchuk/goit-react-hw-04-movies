import { createSlice } from "@reduxjs/toolkit";

const DetalMovie = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    detalMovie: (state, { payload }) => payload,
  },
});

export const { detalMovie } = DetalMovie.actions;
export default DetalMovie.reducer;
