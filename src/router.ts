import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import Customer from './views/Customer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: 'customer',
          name: 'Customer',
          component: Customer
        }
      ]
    }
  ],
});
