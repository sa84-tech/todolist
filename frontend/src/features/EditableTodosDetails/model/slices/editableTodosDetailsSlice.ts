import { createEntityAdapter, createSlice, DeepPartial, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '@/entities/Todo';
import { fetchTodoData } from '../services/fetchTodoData/fetchTodoData';
import { StateSchema } from '@/app/providers/StoreProvider';
import { EditableTodosDetailsSchema, TodoFormData } from '../types/editableTodosDetailsSchema';
import { formStateType } from '@/shared/types';
import { updateTodoData } from '../services/updateTodoData/updateTodoData';

const todosAdapter = createEntityAdapter<Todo>({
    selectId: (todo) => todo.id,
});

export const getTodos = todosAdapter.getSelectors<StateSchema>(
    (state) => state.todosDetails || todosAdapter.getInitialState(),
);

const initialState = todosAdapter.getInitialState<EditableTodosDetailsSchema>({
    formState: 'default',
    isLoading: false,
    ids: [],
    entities: {},
    error: undefined,
    data: undefined,
});

export const editableTodosDetailsSlice = createSlice({
    name: 'editableTodosDetails',
    initialState,
    reducers: {
        setFormState: (state, action: PayloadAction<formStateType>) => {
            state.formState = action.payload;
        },
        cancelEdit: (state) => {
            state.formState = 'default';
            state.form = state.data;
        },
        updateTodo: (state, action: PayloadAction<TodoFormData>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        displayTodo: (state, action: PayloadAction<number>) => {
            state.form = {
                ...state.entities[action.payload] as TodoFormData
            }
            state.data = {
                ...state.entities[action.payload] as Todo
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTodoData.fulfilled, (state, action) => {
                todosAdapter.setAll(state, action.payload.results);
                state.data = action.payload.activeTodo;
                state.form = action.payload.activeTodo;
                state.todolist = action.payload.todolist;
                state.isLoading = false;
            })
            .addCase(fetchTodoData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateTodoData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateTodoData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.formState = 'default';
                state.data = action.payload;
                state.form = action.payload;
                todosAdapter.setOne(state, action.payload);
            })
            .addCase(updateTodoData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: editableTodosDetailsActions } = editableTodosDetailsSlice;
export const { reducer: editableTodosDetailsReducer } = editableTodosDetailsSlice;
