import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { TodolistsPageSchema } from '@/pages/TodolistsPage/model/types/todolistsPageSchema';

export interface StateSchema {
    user: UserSchema;
    counter: CounterSchema;
    todolistsPage: TodolistsPageSchema;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}