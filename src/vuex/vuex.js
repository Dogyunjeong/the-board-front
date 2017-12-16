import Vue from 'vue';
import Vuex from 'vuex';

import taskBoard from '@/app/taskBoard/vuex/taskBoard';
import teamBoardWithTaskNav from '@/app/teamBoardWithTaskNav/vuex/teamBoardWithTaskNav';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    taskBoard: {
      namespaced: true,
      ...taskBoard,
    },
    teamBoardWithTaskNav: {
      namespaced: true,
      ...teamBoardWithTaskNav,
    },
  },
});
