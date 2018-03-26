// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import io from 'socket.io-client';

import App from '@/app/App';
import router from '@/router';
import store from '@/vuex/vuex';
import socketPlugin from '@/lib/socketPlugin';

import DragAndDrop from '@/lib/dragAndDrop/DragAndDrop';
import FixedColumn from '@/lib/components/layouts/FixedColumn';
import Layout from '@/lib/components/layouts/Layout';
import Row from '@/lib/components/layouts/Row';
import LeftNavLayout from '@/lib/components/navigator/LeftNavLayout';


Vue.component('app-fixed-column', FixedColumn);
Vue.component('app-layout', Layout);
Vue.component('app-row', Row);
Vue.component('app-left-nav-layout', LeftNavLayout);
Vue.component('app-drag-and-drop', DragAndDrop);

Vue.config.productionTip = false;

Vue.use(socketPlugin, { host: 'ws://localhost:4041', protocol: 'test-protocol' });

// const io = new Socket('ws://localhost:4041');

// io.on('test', (msg) => {
//   console.log('test msg: ', msg);
// });

// io.emit('test', 'this is test msg from client');

// setTimeout(() => {
//   io.close();
// }, 1000);

// const socket = new WebSocket('ws://localhost:4041');

// socket.addEventListener('message', (msg) => {
//   console.log('message: ', msg);
//   const tesMsg = {
//     route: 'test',
//     data: 'test message',
//   };
//   socket.send(JSON.stringify(tesMsg));
// });


// const socket1 = io('http://localhost:4041');

// const socketTest = () => {
//   console.log('test start');
//   socket.emit('test', 'test working');
//   setTimeout(socketTest, 5000);
// };

// socket.on('connection', () => {
//   console.log('socket connecting');
// });
// setTimeout(socketTest, 5000);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
