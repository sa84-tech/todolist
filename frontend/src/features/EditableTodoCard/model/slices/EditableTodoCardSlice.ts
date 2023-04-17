import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableTodoCardSchema } from '../types/EditableTodoCardSchema';

const initialState: EditableTodoCardSchema = {
    
};

export const EditableTodoCardSlice = createSlice({
    name: 'EditableTodoCard',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: EditableTodoCardActions } = EditableTodoCardSlice;
export const { reducer: EditableTodoCardReducer } = EditableTodoCardSlice;