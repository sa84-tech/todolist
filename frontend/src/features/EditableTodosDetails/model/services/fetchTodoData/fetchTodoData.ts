import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiTodosListResponse } from '../../types/editableTodosDetailsSchema';

export const fetchTodoData = createAsyncThunk<
    ApiTodosListResponse,
    { todolistId: number; todoId?: number },
    ThunkConfig<string>
>('editableTodoCard/fetchTodoData', async ({ todolistId, todoId }, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
        const response = await $api.get<ApiTodosListResponse>('/todos/todo', {
            params: {
                todolist: todolistId,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        const activeTodo = todoId
            ? response.data.results.find((item) => item.id === todoId)
            : response.data.results.find((item) => item.isActive);

        const data = {
            ...response.data,
            activeTodo,
        };

        return data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
