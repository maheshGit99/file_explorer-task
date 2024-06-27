import { configureStore } from "@reduxjs/toolkit";
import FolderSliceReducer from "./slice/FolderSlice";

export const store = configureStore({
  reducer: {
    FolderSlice: FolderSliceReducer,
  },
});
