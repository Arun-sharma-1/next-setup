import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserImage {
    loading: boolean,
    data: null | Record<string, any>,
    error: null | Record<string, any> | string
}
const initialState: UserImage = {
    loading: false,
    data: null,
    error: null
}
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const res = await fetch('https://fakestoreapi.com/users/1');
    const data = await res.json();
    return data;
})
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUser: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch user';
        });
    }
})

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;