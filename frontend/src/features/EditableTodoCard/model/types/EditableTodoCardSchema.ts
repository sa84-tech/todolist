import { Todo } from "@/entities/Todo";

export type formStateType = 'default' | 'create' | 'edit';

export interface EditableTodoCardSchema {
    formState: formStateType;
    isLoading?: boolean;
    error?: string;
    data?: Todo;
    form?: Todo;
}