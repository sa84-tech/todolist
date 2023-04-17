import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { memo } from 'react';
import { Todolist } from '../../model/types/todolist';

interface TodolistsItemProps {
    className?: string;
    todolist: Todolist;
}

export const TodolistsItem = memo((props: TodolistsItemProps) => {
    const { className, todolist } = props;

    const {title, details, previewImage} = todolist

    return (
        <AppLink to='/'>
        <Card className={className}>
            <CardMedia component="img" height="140" image={previewImage} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    <strong>Проект:</strong> {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Описание:</strong> {details}
                </Typography>
            </CardContent>
        </Card>
        </AppLink>
    );
});
