import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import AwsAuthConfig from './services/aws-auth-config';

Amplify.configure({ Auth: AwsAuthConfig });

Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
