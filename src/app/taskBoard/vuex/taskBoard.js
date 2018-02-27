/* eslint-disable object-curly-newline */

// import { Packet } from "_debugger";
import createKanbanSet from '../../../test/createKanbanSet';

const state = {
  selectedTeam: {},
  subTasks: {},
};

const mutations = {
  'SET_KANBAN_SET': (state, { team, tasks, subTasks }) => {
    state.selectedTeam = team;
    state.tasks = tasks;
    state.subTasks = subTasks;
  },
  'ADD_SUB_TASK': (state, subTask) => {
    state.subTasks.push(subTask);
  },
  'MOVE_SUB_TASK': (state, { from, oldIndex, to, newIndex }) => {
    const subTask = state.subTasks[from].splice(oldIndex, 1)[0];
    subTask.section = to;
    state.subTasks[to].splice(newIndex, 0, subTask);
  },
  'UPDATE_SUB_TASK': (state, { section, subTasks }) => {
    state.subTasks[section] = subTasks;
  },
};

const actions = {
  initKanban: async ({ commit }, { sectionNum, taskNum, subTaskNum }) => {
    const kanbanSet = await createKanbanSet({ sectionNum, taskNum, subTaskNum });
    commit('SET_KANBAN_SET', kanbanSet);
  },
  moveSubTask: ({ commit }, { from, oldIndex, to, newIndex }) => {
    commit('MOVE_SUB_TASK', { from, oldIndex, to, newIndex });
  },
  updateSubTaskBySection: ({ commit }, { section, subTasks }) => {
    commit('UPDATE_SUB_TASK', { section, subTasks });
  },
};

const getters = {
  kanbanSet: state => (
    {
      selectedTeam: state.selectedTeam,
      tasks: state.tasks,
      subTasks: state.subTasks,
    }
  ),
  selectedTeam: state => state.selectedTeam,
  sections: state => state.selectedTeam.sections,
  tasks: state => state.tasks,
  subTasks: state => state.subTasks,
  subTasksBySection(state) {
    return section => state.subTasks[section];
  },
  dragStore: state => state.dragStore,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
