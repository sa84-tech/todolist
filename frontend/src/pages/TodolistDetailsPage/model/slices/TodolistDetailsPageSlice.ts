import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodolistDetailsPageSchema } from '../types/todolistDetailsPageSchema';

const initialState: TodolistDetailsPageSchema = {
    
};

export const TodolistDetailsPageSlice = createSlice({
    name: 'TodolistDetailsPage',
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

export const { actions: TodolistDetailsPageActions } = TodolistDetailsPageSlice;
export const { reducer: TodolistDetailsPageReducer } = TodolistDetailsPageSlice;