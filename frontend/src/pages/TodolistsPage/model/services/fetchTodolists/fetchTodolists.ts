import { createAsyncThunk } from '@reduxjs/toolkit';

import { $api } from '@/shared/api/api';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Todolist } from '@/entities/Todolist';
import { getTodolistsPageLimit, getTodolistsPageOffset } from '../../selectors/todolistsPageSelectors';

interface ApiResponse {
    count: number;
    next: string;
    previous: string;
    results: Todolist[];
}

export const fetchTodolists = createAsyncThunk<
ApiResponse,
    void,
    ThunkConfig<string>
    >(
        'todolistsPage/fetchTodolists',
        async (props, thunkApi) => {
            const { rejectWithValue, getState } = thunkApi;

            const limit = getTodolistsPageLimit(getState());
            const offset = getTodolistsPageOffset(getState());

            try {
                const response = await $api.get<ApiResponse>('/todos/todolist', {
                    params: {
                        limit: limit,
                        offset: offset,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
