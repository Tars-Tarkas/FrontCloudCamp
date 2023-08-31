import { configureStore } from "@reduxjs/toolkit";
import FCCSlice, { fetchData } from "./reducer/reducer";

export const store = configureStore({
  reducer: {
    FCC: FCCSlice,
    FCCPost: fetchData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
