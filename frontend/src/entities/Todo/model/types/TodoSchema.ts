import { Todolist } from "@/entities/Todolist";
import { User } from "@/entities/User";

export interface Todo {
    id: number;
    executor?: User;
    title?: string;
    content?: string;
    isActive?: boolean;
    isCompleted?: boolean;
    createdAt?: string;
    updatedAt?: string;
    todolist?: Todolist;
}