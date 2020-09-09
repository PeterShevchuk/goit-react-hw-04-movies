import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "app",
  initialState: true,
  reducers: {
    Loader: (state, { payload }) => payload,
  },
});

// export const actionsFromSlice = todoSlice.actions;
export const { Loader } = loaderSlice.actions;
// export default todoSlice.state;
export default loaderSlice.reducer;
