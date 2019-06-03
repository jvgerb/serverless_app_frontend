import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/auth/sign-in',
    //   component: Auth
    // },
    {
      path: '/:menu?/:submenu?/:tab?',
      component: Main,
    },
  ],
});
