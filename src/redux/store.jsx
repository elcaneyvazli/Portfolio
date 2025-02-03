import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import darkModeReducer from "./features/DarkModeSlice/DarkModeSlice";

export const store = configureStore({
  reducer: {
    darkModeReducer,
  },
});

export const useAppSelector = useSelector;
