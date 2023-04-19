import { Todolist } from '@/entities/Todolist';
import { EntityState } from '@reduxjs/toolkit';


export interface TodolistsPageSchema extends EntityState<Todolist> {
    isLoading?: boolean;
    error?: string;

    // pagination
    total: number;
    limit: number;
    offset: number;
    next: string,
    previous: string,
    // filters
    search: string;
}
