import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { EditableTodolistCardSchema } from '@/features/EditableTodolistCard';
import { TodolistsPageSchema } from '@/pages/TodolistsPage/model/types/todolistsPageSchema';

export interface StateSchema {
    user: UserSchema;
    counter: CounterSchema;
    todolistsPage: TodolistsPageSchema;
    todolistDetails: EditableTodolistCardSchema;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}