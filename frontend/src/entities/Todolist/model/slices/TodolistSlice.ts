import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodolistSchema } from '../types/TodolistSchema';

const initialState: TodolistSchema = {
    
};

export const TodolistSlice = createSlice({
    name: 'Todolist',
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

export const { actions: TodolistActions } = TodolistSlice;
export const { reducer: TodolistReducer } = TodolistSlice;