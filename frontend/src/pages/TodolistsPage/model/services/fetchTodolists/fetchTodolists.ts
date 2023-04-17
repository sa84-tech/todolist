import { createAsyncThunk } from '@reduxjs/toolkit';

import { $api } from '@/shared/api/api';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Todolist } from '@/entities/Todolist';

interface ServerResponse {
    count: number;
    next: string;
    previous: string;
    results: Todolist[];
}

export const fetchTodolists = createAsyncThunk<
    ServerResponse,
    void,
    ThunkConfig<string>
    >(
        'todolistsPage/fetchTodolists',
        async (props, thunkApi) => {
            const { rejectWithValue, getState } = thunkApi;
            const limit = 10;
            const offset = 0;

            try {
                const response = await $api.get<ServerResponse>('/todos/todolist', {
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
