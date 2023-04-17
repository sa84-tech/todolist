import { Todo } from "@/entities/Todo";
import { User } from "@/entities/User";

export interface Todolist {
    id: number;
    title: string;
    details: string;
    previewImage: string;
    isCompleted: boolean;
    isActive: boolean;
    createdAt: string;
    participants: User[]
    todo: Todo[];
}