import { createSlice } from "@reduxjs/toolkit";
import { USERTOKEN } from "../../Components/helpers/vars";

const saveToStorage = (newObj) => {
  localStorage.setItem(USERTOKEN, JSON.stringify(newObj));
  return newObj;
};

const token = createSlice({
  name: "auth",
  initialState: localStorage.getItem(USERTOKEN) ? JSON.parse(localStorage.getItem(USERTOKEN)) : null,
  reducers: {
    setToken: (state, { payload }) => saveToStorage(payload),
    resetToken: () => null,
  },
});

export const { setToken, resetToken } = token.actions;
export default token.reducer;
