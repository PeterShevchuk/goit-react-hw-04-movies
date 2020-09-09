import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUserInfo: (state, { payload }) => payload,
  },
});

export const { setUserInfo } = userInfo.actions;
export default userInfo.reducer;
