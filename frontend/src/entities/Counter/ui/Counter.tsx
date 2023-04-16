import { useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import cls from './Counter.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div className={cls.Counter}>
            <h1 data-testid="value-title">{counterValue}</h1>
            <div className={cls.btnGroup}>
                <button
                    className={cls.btn}
                    data-testid="increment-btn"
                    onClick={increment}
                >
                    +
                </button>
                <button
                    className={cls.btn}
                    data-testid="decrement-btn"
                    onClick={decrement}
                >
                    –
                </button>
            </div>
        </div>
    );
};
