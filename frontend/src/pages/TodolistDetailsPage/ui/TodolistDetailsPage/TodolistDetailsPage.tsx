import cls from './TodolistDetailsPage.module.scss';
import { memo } from 'react';

interface TodolistDetailsPageProps {
    className?: string;
}

export const TodolistDetailsPage = memo((props: TodolistDetailsPageProps) => {
    const { className } = props;
    
    return (
        <div className={`${cls.TodolistDetailsPage} ${className}`}>
           TODOLIST DETAILS PAGE
        </div>
    );
});