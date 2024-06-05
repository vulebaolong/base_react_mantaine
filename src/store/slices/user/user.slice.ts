import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
   email: string | null;
   address: string | null;
   token: string | null;
};

const initialState: TInitialState = {
   email: null,
   address: null,
   token: null,
};

const userSlice = createSlice({
   name: "userSlice",
   initialState,
   reducers: {
      RESET_USER: () => initialState,
   },
});

export const {RESET_USER} = userSlice.actions;

export default userSlice.reducer;
