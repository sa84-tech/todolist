import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Todolist } from '@/entities/Todolist';
import { TodolistsPageSchema } from '../types/todolistsPageSchema';
import { fetchTodolists } from '../services/fetchTodolists/fetchTodolists';

const todolistsAdapter = createEntityAdapter<Todolist>({
    selectId: (todolist) => todolist.id,
});

export const getTodolists = todolistsAdapter.getSelectors<StateSchema>(
    (state) => state.todolistsPage || todolistsAdapter.getInitialState(),
);

const todolistsPageSlice = createSlice({
    name: 'todolistsPageSlice',
    initialState: todolistsAdapter.getInitialState<TodolistsPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        next: '',
        previous: '',
        total: 0,
        limit: 8,
        offset: 0,
        search: '',
    }),
    reducers: {
        setOffset: (state, action: PayloadAction<number>) => {
            state.offset = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodolists.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTodolists.fulfilled, (state, action) => {
                state.isLoading = false;
                state.next = action.payload.next;
                state.previous = action.payload.previous;
                state.total = action.payload.count;
                todolistsAdapter.setAll(state, action.payload.results);
            })
            .addCase(fetchTodolists.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: todolistsPageReducer, actions: todolistsPageActions } = todolistsPageSlice;
