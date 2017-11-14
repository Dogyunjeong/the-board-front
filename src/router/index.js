import Vue from 'vue';
import Router from 'vue-router';
import Kanban from '../app/kanban/Kanban';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Kanban',
      component: Kanban,
    },
  ],
});
