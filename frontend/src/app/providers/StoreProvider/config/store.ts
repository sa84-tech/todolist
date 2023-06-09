import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { editableTodolistCardReducer } from '@/features/EditableTodolistCard';
import { editableTodosDetailsReducer } from '@/features/EditableTodosDetails';
import { todolistsPageReducer } from '@/pages/TodolistsPage';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        counter: counterReducer,
        todolistsPage: todolistsPageReducer,
        todolistDetails: editableTodolistCardReducer,
        todosDetails: editableTodosDetailsReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
