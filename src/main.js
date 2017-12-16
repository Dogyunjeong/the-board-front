// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from '@/app/App';
import router from '@/router';
import store from '@/vuex/vuex';

import '@/styles/layout.scss';

import DragAndDrop from '@/lib/dragAndDrop/DragAndDrop';
import ScrollRow from '@/lib/components/layouts/ScrollRow';
import FixedColumn from '@/lib/components/layouts/FixedColumn';
import Layout from '@/lib/components/layouts/Layout';
import Row from '@/lib/components/layouts/Row';
import LeftNavLayout from '@/lib/components/navigator/LeftNavLayout';


Vue.component('app-scroll-row', ScrollRow);
Vue.component('app-fixed-column', FixedColumn);
Vue.component('app-layout', Layout);
Vue.component('app-row', Row);
Vue.component('app-left-nav-layout', LeftNavLayout);
Vue.component('app-drag-and-drop', DragAndDrop);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
