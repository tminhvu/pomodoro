import { configureStore } from "@reduxjs/toolkit";
import circularProgressSlice from "./slices/circularProgressSlice";
import screenSlice from "./slices/screenSlice";

export const store = configureStore({
    reducer: {
        screen: screenSlice,
        circularProgress: circularProgressSlice
    }
})
