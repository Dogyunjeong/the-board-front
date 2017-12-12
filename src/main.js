// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from '@/app/App';
import router from '@/router';
import store from '@/vuex/vuex';

import ScrollRow from '@/lib/components/sections/ScrollRow';
import FixedColumn from '@/lib/components/sections/FixedColumn';
import Layout from '@/lib/components/sections/Layout';
import Row from '@/lib/components/sections/Row';

Vue.component('app-scroll-row', ScrollRow);
Vue.component('app-fixed-column', FixedColumn);
Vue.component('app-layout', Layout);
Vue.component('app-row', Row);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
