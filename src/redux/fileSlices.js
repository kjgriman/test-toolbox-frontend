import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    file: [],
}

const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        saveFile: (state, action) => {
            state.file = action.payload
        },
        reset: (state) => {
            initialState;
        }
    }
})

export const { saveFile, reset } = fileSlice.actions;
export default fileSlice.reducer;