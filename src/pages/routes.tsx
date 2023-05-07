import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { DataPage } from './DataPage';
import { TestPage } from './TestPage';

export const root: RouteObject[] = [
    {
        path: '/test-app',
        element: <HomePage />
    },
    {
        path: '/test-app/test',
        element: <TestPage />
    }
]

const Routes = () => {
    const routes = useRoutes(root);
    return routes;
}

export default Routes;