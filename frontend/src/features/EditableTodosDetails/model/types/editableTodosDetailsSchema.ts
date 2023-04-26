import { Todo } from '@/entities/Todo';
import { Todolist } from '@/entities/Todolist';
import { User } from '@/entities/User';
import { formStateType } from '@/shared/types';
import { DeepPartial, EntityState } from '@reduxjs/toolkit';

export interface EditableTodosDetailsSchema extends EntityState<Todo> {
    formState: formStateType;
    isLoading?: boolean;
    error?: string;
    data?: Todo;
    form?: TodoFormData;
    todolist?: Todolist;
    // participants?: User[];
}

export interface ApiTodoResponse extends Omit<Todo, 'executor'> {
    executor: number
}

export interface ApiTodosListResponse {
    results: Todo[];
    todolist: Todolist;
    activeTodo?: Todo;
}