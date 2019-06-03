import Vue from 'vue';
import Router from 'vue-router';
import VueEvents from 'vue-events';
import InvoiceList from '@/components/InvoiceList';
import Invoice from '@/components/Invoice';
import InvoiceCreate from '@/components/InvoiceCreate';
import Auth from '@/components/Auth';

import awsAuth from '../services/awsExport';

Vue.use(Router);
Vue.use(VueEvents);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: InvoiceList,
      meta: { requiresAuth: true }
    },
    {
      path: '/InvoiceList',
      name: 'InvoiceList',
      component: InvoiceList,
      meta: { requiresAuth: true }
    },
    {
      path: '/Invoice/:id',
      name: 'Edit Invoice',
      component: Invoice,
      meta: { requiresAuth: true }
    },
    {
      path: '/InvoiceCreate',
      name: 'InvoiceCreate',
      component: InvoiceCreate,
      meta: { requiresAuth: true }
    },
    {
      path: '/Auth',
      name: 'Auth',
      component: Auth,
      meta: { guest: true }
    },
    {
      path: '*',
      name: '404',
      component: Auth
    }
  ]
});

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem(`CognitoIdentityServiceProvider.${awsAuth.userPoolWebClientId}.LastAuthUser`)) {
      next({
        path: '/Auth',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem(`CognitoIdentityServiceProvider.${awsAuth.userPoolWebClientId}.LastAuthUser`)) {
      next({ name: 'InvoiceList'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
