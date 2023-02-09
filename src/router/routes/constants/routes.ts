import { GoDoggyRouteLayout } from '../interfaces/routes';

export const goDoggyRoutes: GoDoggyRouteLayout = {
    home: {
        root: {
            path: '/',
            name: 'Home'
        },
        details: {
            path: '/:id',
            name: 'Details'
        }
    }
}