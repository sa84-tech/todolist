import { Todo } from "@/entities/Todo";

export interface EditableTodoCardSchema {
    readonly: boolean;
    isLoading: boolean;
    error?: string;
    data?: Todo;
    form?: Todo;
}