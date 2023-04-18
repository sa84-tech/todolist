import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableTodoCardSchema, formStateType } from '../types/EditableTodoCardSchema';
import { Todo } from '@/entities/Todo';

const initialState: EditableTodoCardSchema = {
    formState: 'default',
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const editableTodoCardSlice = createSlice({
    name: 'editableTodoCard',
    initialState,
    reducers: {
        setFormState: (state, action: PayloadAction<formStateType>) => {
            state.formState = action.payload;
        },
        cancelEdit: (state) => {
            state.formState = 'default';
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