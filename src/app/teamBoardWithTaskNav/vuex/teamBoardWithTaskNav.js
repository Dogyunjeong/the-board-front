/* eslint-disable object-curly-newline */

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
  UPDATE_TEAM_SECTION(state, { teamId, sections }) {
    state.teamTasks[teamId].sections = sections;
  },
  ADD_TEAM(state, { id, name, sections }) {
    state.teams.push({ id, name, sections });
    state.teamTasks[id] = { sections };
    sections.forEach((section) => {
      state.teamTasks[id][section] = [];
    });
  },
  ADD_TASK(state, { task, teamIds, section }) {
    state.tasks.push(task);

    teamIds.forEach((teamId) => {
      state.teamTasks[teamId][section].push(task);
    });
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
  updateTeamSection({ commit }, { teamId, sections }) {
    commit('UPDATE_TEAM_SECTION', { teamId, sections });
  },
  addTeam({ commit }, { name }) {
    // TODO: server request and get respons then working.
    // TODO: error handling

    // temporary substitution of server request
    const id = createData.createId();
    const sections = ['todo', 'doing', 'end'];

    // after server
    commit('ADD_TEAM', { id, name, sections });
  },
  addTask({ commit }, { title, detail, assignedTeamIds, start, end }) { // eslint-disable-line
    // TODO: server request and get respons then working.
    // TODO: error handling

    // temporary substitution of server request
    const id = createData.createId();
    const assignedTeams = {};
    const teamIds = [];
    assignedTeamIds.forEach((teamId) => {
      teamIds.push(teamId);
      assignedTeams[teamId] = {
        subTaskProcess: { current: 0, total: 100 },
        section: 'todo',
      };
    });
    const task = {
      id,
      title,
      detail,
      assignedTeams,
      start,
      end,
    };

    // after server response
    commit('ADD_TASK', { task, teamIds, section: 'todo' });
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
