import { useMeStore } from '@/stores/me';

export default [
  {
    path: '/login',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    beforeEnter: (to, from, next) => {
      const meStore = useMeStore();
      if (meStore.isLoggedIn) {
        next({name: 'dashboard'});
      } else {
        next();
      }
    },
    children: [
      {
        name: 'login',
        path: '',
        component: () => import('@/views/auth/Login.vue')
      }
    ]
  },
  {
    path: '/registrar',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    children: [
      {
        name: 'register',
        path: '',
        component: () => import('@/views/auth/Register.vue')
      }
    ]
  },

];
