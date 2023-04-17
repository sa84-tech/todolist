export interface Todo {
    id: number;
    executor: string;
    title: string;
    content: string;
    isActive: boolean;
    isCompleted: boolean;
    createdAt: string;
    updatedAt: string;
    todolistId: number;
}