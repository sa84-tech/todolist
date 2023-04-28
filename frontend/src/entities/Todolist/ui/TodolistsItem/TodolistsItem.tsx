import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { Todolist } from '../../model/types/todolist';
import { useNavigate } from 'react-router-dom';

interface TodolistsItemProps {
    className?: string;
    todolist: Todolist;
}

export const TodolistsItem = memo((props: TodolistsItemProps) => {
    const { className, todolist } = props;

    const { title, details, previewImage } = todolist;

    const navigate = useNavigate();

    const onClickHandler = useCallback(() => {
        navigate(RoutePath.todolist_details + todolist.id);
    }, [todolist]);

    return (
        <Card className={className} sx={{ height: '370px' }}>
            <CardActionArea onClick={onClickHandler}>
                <CardMedia component="img" height="140" image={previewImage} alt={title} />
                <CardContent >
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {details}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});
