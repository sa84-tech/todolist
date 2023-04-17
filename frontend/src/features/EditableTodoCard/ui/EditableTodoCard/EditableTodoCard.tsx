import cls from './EditableTodoCard.module.scss';
import { memo } from 'react';

interface EditableTodoCardProps {
    className?: string;
}

export const EditableTodoCard = memo((props: EditableTodoCardProps) => {
    const { className } = props;
    
    return (
        <div className={`${cls.EditableTodoCard} ${className}`}>
           
        </div>
    );
});