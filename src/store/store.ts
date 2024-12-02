import { configureStore } from "@reduxjs/toolkit";
import { mapSlice } from "./slices/mapSlice";
import employeesSlice from "./slices/employeesSlice";

export const store = configureStore({
  reducer: {
    maps: mapSlice.reducer,
    employees: employeesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
