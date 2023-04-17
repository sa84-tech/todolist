import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableTodolistCardSchema } from '../types/EditableTodolistCardSchema';

const initialState: EditableTodolistCardSchema = {
    
};

export const EditableTodolistCardSlice = createSlice({
    name: 'EditableTodolistCard',
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

export const { actions: EditableTodolistCardActions } = EditableTodolistCardSlice;
export const { reducer: EditableTodolistCardReducer } = EditableTodolistCardSlice;