import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Customer from './views/Customer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/customer',
          component: Customer
        }
      ]
    }
  ],
});
