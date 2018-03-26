import Vue from 'vue';
import Router from 'vue-router';

import TeamBoardWithTaskNav from '@/app/teamBoardWithTaskNav/TeamBoardWithTaskNav';
import TaskBoard from '@/app/taskBoard/TaskBoard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TeamBoardWithTaskNav',
      component: TeamBoardWithTaskNav,
    },
    {
      path: '/team',
      name: 'TeamBoardWithTaskNav',
      component: TeamBoardWithTaskNav,
    },
    {
      path: '/task',
      name: 'TaskBoard',
      component: TaskBoard,
    },
  ],
});
