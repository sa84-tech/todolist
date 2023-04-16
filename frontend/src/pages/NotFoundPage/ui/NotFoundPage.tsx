import { memo } from 'react';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
    const { className } = props;
	
    return (
        <div className={className}>
            <h1>Страница не найдена</h1>
        </div>
    );
});
