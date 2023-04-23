import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Todo } from '@/entities/Todo';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { insertUserData } from '../../mappers/insertUserData';
import {
    getTodosDetailsForm
} from '../../selectors/editableTodoCardSelectors';
import { ApiTodoResponse } from '../../types/editableTodosDetailsSchema';

export const createTodo = createAsyncThunk<Todo, void, ThunkConfig<string>>(
    'editableTodoCard/createTodo',
    async (_, thunkApi) => {
        const { rejectWithValue, getState } = thunkApi;

        const formData = getTodosDetailsForm(getState());

        const requestBody = {
            title: formData?.title,
            content: formData?.content,
            todolist: formData?.todolist,
            executor: formData?.executor?.id,
            isCompleted: formData?.isCompleted,
        };

        try {
            const response = await $api.post<ApiTodoResponse>(
                '/todos/todo/',
                requestBody
            );

            if (!response.data) {
                throw new Error();
            }

            console.log("🚀 ~ file: createTodo.ts:42 ~ response.data:", response.data)
            return insertUserData(getState(), response.data);

        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);
