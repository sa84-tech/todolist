import { Todolist } from '@/entities/Todolist';
import { formStateType } from '@/shared/types';

export interface EditableTodolistCardSchema {
    // readonly: boolean;
    isLoading: boolean;
    error?: string;
    data?: Todolist;
    form?: Todolist;
    formState: formStateType;
}
