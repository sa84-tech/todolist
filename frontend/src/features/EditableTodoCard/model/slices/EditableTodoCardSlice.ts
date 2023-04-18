import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableTodoCardSchema } from '../types/editableTodoCardSchema';
import { Todo } from '@/entities/Todo';

const initialState: EditableTodoCardSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const editableTodoCardSlice = createSlice({
    name: 'editableTodoCard',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        updateTodo: (state, action: PayloadAction<Todo>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(fetchTodolistData.pending, (state) => {
            //     state.error = undefined;
            //     state.isLoading = true;
            // })
            // .addCase(fetchTodolistData.fulfilled, (state, action: PayloadAction<Todolist>) => {
            //     state.isLoading = false;
            //     state.data = action.payload;
            //     state.form = action.payload;
            // })
            // .addCase(fetchTodolistData.rejected, (state, action) => {
            //     state.isLoading = false;
            //     state.error = action.payload;
            // })
            // .addCase(updateTodolistData.pending, (state) => {
            //     state.error = undefined;
            //     state.isLoading = true;
            // })
            // .addCase(updateTodolistData.fulfilled, (state, action: PayloadAction<Todolist>) => {
            //     state.isLoading = false;
            //     state.data = action.payload;
            //     state.form = action.payload;
            //     state.readonly = true;
            // })
            // .addCase(updateTodolistData.rejected, (state, action) => {
            //     state.isLoading = false;
            //     state.error = action.payload;
            // });
    },
});

export const { actions: editableTodoCardActions } = editableTodoCardSlice;
export const { reducer: editableTodoCardReducer } = editableTodoCardSlice;