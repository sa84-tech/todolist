import { memo } from 'react';
import cls from './TestPage.module.scss';
import { Counter } from '@/entities/Counter';

interface TestPageProps {
    className?: string;
}

export const TestPage = memo((props: TestPageProps) => {
    const { className } = props;
	
    return (
        <div className={className}>
            <h1>Тестовая страница</h1>
            <Counter />
        </div>
    );
});
