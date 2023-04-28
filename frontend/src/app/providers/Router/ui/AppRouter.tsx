import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { memo, Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        return (
            <Route key={route.path} path={route.path} element={route.element} />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
