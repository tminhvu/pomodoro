import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLandscape: false
}

export const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setIsLandscape: (state, action) => {
            state.isLandscape = action.payload
        }
    }
})

export const { setIsLandscape } = screenSlice.actions

export default screenSlice.reducer
