import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { email: "", password: "" , header:false } },
  reducers: {
    login: (state, { payload }) => {
      state.value = payload;
    },
    logout: (state:any) => {
      state.value = { email: "", password: "" };
    },
    setLayout: (state:any, { payload }) => {
      state.layout = payload;
    },
    setToogleHeader: (state:any, { payload }) => {
      state.header = payload;
    },
  },
});

export const { login, logout, setLayout , setToogleHeader} = userSlice.actions;
export default userSlice.reducer;
