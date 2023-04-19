import { StateSchema } from '@/app/providers/StoreProvider';

export const getTodolistsPageIsLoading = (state: StateSchema) => state.todolistsPage?.isLoading;
export const getTodolistsPageError = (state: StateSchema) => state.todolistsPage?.error;
