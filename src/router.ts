import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: {
    //     path: '/customer/customer/customer'
    //   }
    // },
    // {
    //   path: '/:menu',
    //   redirect: {
    //     path: '/:menu?/customer/customer'
    //   }
    // },
    // {
    //   path: '/:menu/:submenu',
    //   redirect: {
    //     path: '/:menu?/:submenu?/customer'
    //   }
    // },
    {
      path: '/:menu?/:submenu?/:tab?',
      component: Main
    },
  ],
});
