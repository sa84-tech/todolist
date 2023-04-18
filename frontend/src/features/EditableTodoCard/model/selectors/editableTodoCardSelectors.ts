import { StateSchema } from "@/app/providers/StoreProvider";

export const getTodoCardData = (state: StateSchema) => state.todosDetails?.data;
export const getTodoCardError = (state: StateSchema) => state.todosDetails?.error;
export const getTodoCardForm = (state: StateSchema) => state.todosDetails?.form;
export const getTodoCardIsLoading = (state: StateSchema) => state.todosDetails?.isLoading;
export const getTodoCardformState = (state: StateSchema) => state.todosDetails?.formState;
