import { StateSchema } from '@/app/providers/StoreProvider';
import { getTodosDetailsTodolist } from '../selectors/editableTodoCardSelectors';
import { ApiTodoResponse } from '../types/editableTodosDetailsSchema';

export const insertUserData = (
    state: StateSchema,
    responseData: ApiTodoResponse
) => {
    const todolist = getTodosDetailsTodolist(state);
    const executor = responseData.executor;

    const data = {
        ...responseData,
        executor: todolist?.participants?.find((user) => user.id === executor),
    };

    return data;
};
