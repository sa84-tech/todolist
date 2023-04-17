import cls from './EditableTodolistCard.module.scss';
import { memo } from 'react';

interface EditableTodolistCardProps {
    className?: string;
}

export const EditableTodolistCard = memo((props: EditableTodolistCardProps) => {
    const { className } = props;
    
    return (
        <div className={`${cls.EditableTodolistCard} ${className}`}>
           
        </div>
    );
});