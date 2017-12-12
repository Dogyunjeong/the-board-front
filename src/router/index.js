import Vue from 'vue';
import Router from 'vue-router';

import TeamBoard from '../app/teamBoard/TeamBoard';
import TaskBoard from '../app/taskBoard/TaskBoard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TeamBoard',
      component: TeamBoard,
    },
    {
      path: '/task',
      name: 'TaskBoard',
      component: TaskBoard,
    },
  ],
});
