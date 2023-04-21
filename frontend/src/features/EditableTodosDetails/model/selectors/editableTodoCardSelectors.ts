import { StateSchema } from "@/app/providers/StoreProvider";

export const getTodosDetailsData = (state: StateSchema) => state.todosDetails?.data;
export const getTodosDetailsTodolist = (state: StateSchema) => state.todosDetails?.todolist;
export const getTodosDetailsError = (state: StateSchema) => state.todosDetails?.error;
export const getTodosDetailsForm = (state: StateSchema) => state.todosDetails?.form;
export const getTodosDetailsIsLoading = (state: StateSchema) => state.todosDetails?.isLoading;
export const getTodosDetailsformState = (state: StateSchema) => state.todosDetails?.formState;
