import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableTodolistCardSchema } from '../types/editableTodolistCardSchema';
import { Todolist } from '@/entities/Todolist';
import { fetchTodolistData } from '../services/fetchTodolistData/fetchTodolistData';
import { updateTodolistData } from '../services/updateTodolistData/updateTodolistData';
import { formStateType } from '@/shared/types';

const initialState: EditableTodolistCardSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    formState: 'default',
};

export const editableTodolistCardSlice = createSlice({
    name: 'editableTodolistCard',
    initialState,
    reducers: {
        setFormState: (state, action: PayloadAction<formStateType>) => {
            state.formState = action.payload;
        },
        cancelEdit: (state) => {
            state.form = state.data;
            state.formState = 'default';
        },
        updateTodolist: (state, action: PayloadAction<Todolist>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodolistData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTodolistData.fulfilled, (state, action: PayloadAction<Todolist>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchTodolistData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateTodolistData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateTodolistData.fulfilled, (state, action: PayloadAction<Todolist>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.formState = 'default';
            })
            .addCase(updateTodolistData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: editableTodolistCardActions } = editableTodolistCardSlice;
export const { reducer: editableTodolistCardReducer } = editableTodolistCardSlice;
