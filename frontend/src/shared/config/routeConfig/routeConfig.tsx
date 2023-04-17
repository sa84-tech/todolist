import { AdminPage } from '@/pages/AdminPage';
import { TodolistsPage } from '@/pages/TodolistsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { TestPage } from '@/pages/TestPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    TEST = 'test',
    ADMIN = 'admin',
    PROFILE = 'profile',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TEST]: '/test',
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.PROFILE]: '/profile',

    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <TodolistsPage />,
    },
    [AppRoutes.TEST]: {
        path: RoutePath.test,
        element: <TestPage />,
    },
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <AdminPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
