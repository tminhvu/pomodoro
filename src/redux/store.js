import { configureStore } from "@reduxjs/toolkit";
import circularProgressSlice from "./slices/circularProgressSlice";

export const store = configureStore({
    reducer: {
        circularProgress: circularProgressSlice
    }
})
