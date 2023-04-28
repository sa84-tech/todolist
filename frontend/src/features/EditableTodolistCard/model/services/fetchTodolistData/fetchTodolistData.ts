import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { $api } from '@/shared/api/api';
import { Todolist } from '@/entities/Todolist';

export const fetchTodolistData = createAsyncThunk<
    Todolist,
    number,
    ThunkConfig<string>
    >(
        'editableTodolistCard/fetchTodolistData',
        async (todolistId, thunkApi) => {
            const { rejectWithValue } = thunkApi;

            try {
                const response = await $api.get<Todolist>(`/todos/todolist/${String(todolistId)}`);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
