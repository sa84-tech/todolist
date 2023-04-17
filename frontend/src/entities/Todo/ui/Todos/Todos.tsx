import { memo } from 'react';
import { Todo } from '../../model/types/TodoSchema';
import cls from './Todo.module.scss';

interface TodosProps {
    className?: string;
    view?: 'full' | 'shorten';
    todos: Todo[];
    isLoading?: boolean;
}

export const Todos = memo((props: TodosProps) => {
    const { className, view = 'full', todos, isLoading } = props;
    
    return (
        <div className={`${cls.Todo} ${className}`}>
           {view === 'full' ? 'TODOS FULL' : "TODOS SHORTEN"} 
        </div>
    );
});