import { Todolist } from '@/entities/Todolist';

export interface EditableTodolistCardSchema {
    readonly: boolean;
    isLoading: boolean;
    error?: string;
    data?: Todolist;
    form?: Todolist;
}
