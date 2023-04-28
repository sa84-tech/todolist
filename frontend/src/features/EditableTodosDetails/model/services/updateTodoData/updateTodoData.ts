import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Todo } from '@/entities/Todo';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { insertUserData } from '../../mappers/insertUserData';
import {
    getTodosDetailsForm
} from '../../selectors/editableTodoCardSelectors';
import { ApiTodoResponse } from '../../types/editableTodosDetailsSchema';

export const updateTodoData = createAsyncThunk<Todo, void, ThunkConfig<string>>(
    'editableTodoCard/updateTodoData',
    async (_, thunkApi) => {
        const { rejectWithValue, getState } = thunkApi;

        const formData = getTodosDetailsForm(getState());

        const requestBody = {
            ...formData,
            executor: formData?.executor?.id,
        };

        try {
            const response = await $api.put<ApiTodoResponse>(
                `/todos/todo/${formData?.id}/`,
                requestBody
            );

            if (!response.data) {
                throw new Error();
            }

            return insertUserData(getState(), response.data);
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);
