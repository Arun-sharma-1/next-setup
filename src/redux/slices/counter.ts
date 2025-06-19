import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}
const counterSlice = createSlice({
    name: 'counter¸',
    initialState,
    reducers: {
        updateCount: (state, action) => {
            state.count = action.payload
        }
    }
})

export const { updateCount } = counterSlice.actions;
export default counterSlice.reducer;