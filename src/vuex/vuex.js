import Vue from 'vue';
import Vuex from 'vuex';

import taskBoard from '@/app/taskBoard/vuex/taskBoard';
import teamBoard from '@/app/teamBoard/vuex/teamBoard';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    taskBoard: {
      namespaced: true,
      ...taskBoard,
    },
    teamBoard: {
      namespaced: true,
      ...teamBoard,
    },
  },
});
