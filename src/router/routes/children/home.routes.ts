import { goDoggyRoutes } from '../constants/routes';
import { default as AppLayout } from '@/layouts/appLayout.vue';

export const homeRoutes = {
    path: '/',
    name: goDoggyRoutes.home.root.name,
    component: AppLayout,
    meta: {
        title: goDoggyRoutes.home.root.name
    },
    children: [
        {
            path: '',
            name: goDoggyRoutes.home.root.name,
            component: () => import('@/views/home/index.vue'),
            meta: {
                title: goDoggyRoutes.home.root.name
            },
        }
    ]
}