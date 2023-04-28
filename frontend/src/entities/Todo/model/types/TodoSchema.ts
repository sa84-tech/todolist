import { User } from "@/entities/User";
import { DeepPartial } from "redux";

export interface Todo {
    id: number;
    executor?: User;
    title?: string;
    content?: string;
    isActive?: boolean;
    isCompleted?: boolean;
    createdAt?: string;
    updatedAt?: string;
    todolist?: number;
}

export type TodoFormData = DeepPartial<Todo>;