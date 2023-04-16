import { Counter } from '@/entities/Counter';
import { useState } from 'react';

export const MainPage = () => {
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <main>
            <h1>Главная страница</h1>
        </main>
    );
};
