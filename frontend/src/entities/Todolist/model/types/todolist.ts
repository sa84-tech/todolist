import { Todo } from "@/entities/Todo";
import { User } from "@/entities/User";
import { DeepPartial } from "redux";

export interface Todolist {
    id: number;
    title?: string;
    details?: string;
    previewImage?: string;
    isCompleted?: boolean;
    isActive?: boolean;
    createdAt?: string;
    participants?: User[]
    todo?: Todo[];
}

export type TodolistFormData = DeepPartial<Todolist>