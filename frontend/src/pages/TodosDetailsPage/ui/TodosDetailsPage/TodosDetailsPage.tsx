import cls from './TodosDetailsPage.module.scss';
import { memo } from 'react';

interface TodosDetailsPageProps {
    className?: string;
}

export const TodosDetailsPage = memo((props: TodosDetailsPageProps) => {
    const { className } = props;
    
    return (
        <div className={`${cls.TodosDetailsPage} ${className}`}>
           
        </div>
    );
});