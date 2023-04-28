import { StateSchema } from "@/app/providers/StoreProvider";

export const getTodolistData = (state: StateSchema) => state.todolistDetails?.data;
export const getTodolistError = (state: StateSchema) => state.todolistDetails?.error;
export const getTodolistForm = (state: StateSchema) => state.todolistDetails?.form;
export const getTodolistIsLoading = (state: StateSchema) => state.todolistDetails?.isLoading;
export const getTodolistFormState = (state: StateSchema) => state.todolistDetails?.formState;
