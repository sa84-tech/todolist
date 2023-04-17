import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosDetailsPageSchema } from '../types/TodosDetailsPageSchema';

const initialState: TodosDetailsPageSchema = {
    
};

export const TodosDetailsPageSlice = createSlice({
    name: 'TodosDetailsPage',
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

export const { actions: TodosDetailsPageActions } = TodosDetailsPageSlice;
export const { reducer: TodosDetailsPageReducer } = TodosDetailsPageSlice;