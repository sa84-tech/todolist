import { StateSchema } from '@/app/providers/StoreProvider';

export const getTodolistsPageIsLoading = (state: StateSchema) => state.todolistsPage?.isLoading;

export const getTodolistsPageError = (state: StateSchema) => state.todolistsPage?.error;

export const getTodolistsPageOffset = (state: StateSchema) => state.todolistsPage?.offset || 0;

export const getTodolistsPageLimit = (state: StateSchema) => state.todolistsPage?.limit || 8;

export const getTodolistsPageTotal = (state: StateSchema) => state.todolistsPage?.total;

export const getTodolistsPageCount = (state: StateSchema) => {
    const limit = state.todolistsPage?.limit;
    const total = state.todolistsPage?.total;
    return Math.ceil(total / limit)
};
