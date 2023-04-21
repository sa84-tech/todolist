import { Todo } from '@/entities/Todo';
import { Todolist } from '@/entities/Todolist';
import { User } from '@/entities/User';
import { formStateType } from '@/shared/types';
import { DeepPartial, EntityState } from '@reduxjs/toolkit';

export type TodoFormData = DeepPartial<Todo>;

export interface EditableTodosDetailsSchema extends EntityState<Todo> {
    formState: formStateType;
    isLoading?: boolean;
    error?: string;
    data?: Todo;
    form?: TodoFormData;
    todolist?: Todolist;
    // participants?: User[];
}
