import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { EditableTodolistCardSchema } from '@/features/EditableTodolistCard';
import { EditableTodosDetailsSchema } from '@/features/EditableTodosDetails';
import { TodolistsPageSchema } from '@/pages/TodolistsPage';

export interface StateSchema {
    user: UserSchema;
    counter: CounterSchema;
    todolistsPage: TodolistsPageSchema;
    todolistDetails: EditableTodolistCardSchema;
    todosDetails: EditableTodosDetailsSchema;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}