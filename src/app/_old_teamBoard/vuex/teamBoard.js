import createData from '@/test/createData';


const state = {
  teams: [],
  references: [],
  tasksByReferenceId: {},
};

const mutations = {
  INIT_TEAM_BOARD(state, { teams, references, tasksByReferenceId }) {
    state.teams = teams;
    state.references = references;
    state.tasksByReferenceId = tasksByReferenceId;
  },
};
const actions = {
  initTeamBoard({ commit }) {
    const dataSet =
      createData.createTeamBoardData({ teamNum: 8, referenceNum: 10, taskNum: 10 });
    console.log('initTeamBoard: ', dataSet);
    commit('INIT_TEAM_BOARD', dataSet);
  },
};
const getters = {
  teams(state) {
    return state.teams;
  },
  references(state) {
    return state.references;
  },
  tasksByReferenceId(state) {
    return referenceId => state.tasksByReferenceId[referenceId];
  },
};


export default {
  state,
  mutations,
  actions,
  getters,
};
