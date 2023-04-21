import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { $api } from '@/shared/api/api';
import { Todo } from '@/entities/Todo';
import { Todolist } from '@/entities/Todolist';

interface ApiResponse {
    results: Todo[];
    todolist: Todolist;
    activeTodo?: Todo;
}

export const fetchTodoData = createAsyncThunk<ApiResponse, number, ThunkConfig<string>>(
    'editableTodoCard/fetchTodoData',
    async (todolistId, thunkApi) => {
        const { rejectWithValue } = thunkApi;

        try {
            const response = await $api.get<ApiResponse>('/todos/todo', {
                params: {
                    todolist: todolistId,
                }
            });

            if (!response.data) {
                throw new Error();
            }

            const data = {
                ...response.data,
                activeTodo: response.data.results.find(item => item.isActive),
            }

            return data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
