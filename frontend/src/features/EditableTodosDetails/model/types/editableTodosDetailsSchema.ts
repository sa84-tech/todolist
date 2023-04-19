import { Todo } from "@/entities/Todo";
import { formStateType } from "@/shared/types";
import { EntityState } from "@reduxjs/toolkit";

export interface EditableTodosDetailsSchema extends EntityState<Todo> {
    formState: formStateType;
    currentTodoId: number | null;
    isLoading?: boolean;
    error?: string;
    data?: Todo;
    form?: Todo;
}