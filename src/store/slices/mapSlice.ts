import { createSlice } from "@reduxjs/toolkit";
import { MapState } from "./types";

const initialState: MapState = {
  isActiveButton: 0,
};

export const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    changeType: (state, actions) => {
      state.isActiveButton = actions.payload;
    },
  },
});

export const { changeType } = mapSlice.actions;

export default mapSlice.reducer;
