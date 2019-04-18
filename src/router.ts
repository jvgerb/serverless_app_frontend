import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import Customer from './views/Customer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:menu/:submenu/:tab',
      component: Main,
      children: [
        {
          path: '/:menu/:submenu',
          redirect: 'customer'
        },
      ]
    },
    {
      path: '/:menu/:submenu',
      redirect: 'customer'
    },
    {
      path: '/:menu/',
      redirect: 'customer/customer'
    },
    {
      path: '/',
      redirect: 'customer/customer/customer'
    }
  ],
});
