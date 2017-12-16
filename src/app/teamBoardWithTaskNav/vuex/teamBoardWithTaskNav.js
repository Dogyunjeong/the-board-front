import createData from '@/test/createData';


const state = {
  teams: [],
  references: [],
  tasks: [],
  tasksByReferenceId: {},
  teamTasks: {},
};

const mutations = {
  INIT_TEAM_BOARD(state, { teams, references, tasksByReferenceId, tasks, teamTasks }) {
    state.teams = teams;
    state.references = references;
    state.tasksByReferenceId = tasksByReferenceId;
    state.tasks = tasks;
    state.teamTasks = teamTasks;
  },
  UPDATE_TEAM_TASKS_BY_SECTION(state, { teamId, section, value }) {
    state.teamTasks[teamId][section] = value;
  },
};
const actions = {
  initTeamBoard({ commit }) {
    const dataSet =
      createData.createTeamBoardData({ teamNum: 8, referenceNum: 10, taskNum: 10 });
    commit('INIT_TEAM_BOARD', dataSet);
  },
  updateTeamTasksBySection({ commit }, { teamId, section, value }) {
    commit('UPDATE_TEAM_TASKS_BY_SECTION', { teamId, section, value });
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
  tasks(state) {
    return state.tasks;
  },
  teamTasksBySection(state) {
    return (teamId, section) => state.teamTasks[teamId][section];
  },
  teamSections(state) {
    return (teamId) => {
      if (state.teamTasks[teamId]) return state.teamTasks[teamId].sections;
      return null;
    };
  },
};


export default {
  state,
  mutations,
  actions,
  getters,
};
