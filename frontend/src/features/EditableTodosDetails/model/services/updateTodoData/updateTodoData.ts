import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Todolist } from '@/entities/Todolist';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTodolistForm } from '../../selectors/editableTodolistCardSelectors';

export const updateTodolistData = createAsyncThunk<
    Todolist,
    void,
    ThunkConfig<string>
    >(
        'editableTodolistCard/updateTodolistData',
        async (_, thunkApi) => {
            const { rejectWithValue, getState } = thunkApi;

            const formData = getTodolistForm(getState());

            try {
                const response = await $api.put<Todolist>(
                    `/todos/toodlist/${formData?.id}`,
                    formData,
                );

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
