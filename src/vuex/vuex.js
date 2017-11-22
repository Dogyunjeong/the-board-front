import Vue from 'vue';
import Vuex from 'vuex';

import taskBoard from '../app/taskBoard/vuex/taskBoard.vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: [
    taskBoard,
  ],
});
