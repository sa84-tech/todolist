import { AdminPage } from '@/pages/AdminPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { TestPage } from '@/pages/TestPage';
import { TodolistDetailsPage } from '@/pages/TodolistDetailsPage';
import { TodolistsPage } from '@/pages/TodolistsPage';
import { TodosDetailsPage } from '@/pages/TodosDetailsPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    TODOLIST_DETAILS = 'todolist_details',
    TODO_DETAILS = 'todo_details',
    TEST = 'test',
    ADMIN = 'admin',
    PROFILE = 'profile',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TODOLIST_DETAILS]: '/todolists/', //+ :id
    [AppRoutes.TODO_DETAILS]: '/todos/', //+ :id
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
    [AppRoutes.TODOLIST_DETAILS]: {
        path: `${RoutePath.todolist_details}:id`,
        element: <TodolistDetailsPage />,
    },
    [AppRoutes.TODO_DETAILS]: {
        path: `${RoutePath.todo_details}:id`,
        element: <TodosDetailsPage />,
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
