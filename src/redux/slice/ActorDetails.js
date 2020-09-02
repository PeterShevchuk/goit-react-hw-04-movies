import { createSlice } from "@reduxjs/toolkit";

const DetalActor = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    detalActor: (state, { payload }) => payload,
  },
});

export const { detalActor } = DetalActor.actions;
export default DetalActor.reducer;
