// import { Packet } from "_debugger";
import createKanbanSet from '../../../test/createDataSet'; //eslint-disable-line

const updateState = (state, updateObj) => {
  Object.keys(updateObj).forEach((key) => {
    if (updateObj[key]) state[key] = updateObj[key];
  });
};
const state = {
  team: {},
  tasks: [],
  subTasks: [],
  dragStore: {},
};

const mutations = {
  'SET_KANBAN_SET': (state, { team, tasks, subTasks }) => {
    state.team = team;
    state.tasks = tasks;
    state.subTasks = subTasks;
  },
  'ADD_SUB_TASK': (state, subTask) => {
    state.subTasks.push(subTask);
  },
  'UPDATE_DRAG_STORE': (state, { context, nextSibling }) => {
    updateState(state.dragStore, { context, nextSibling });
  },
  'MOVE_SUB_TASK': (state) => {
    state.subTasks['todo'].push(state.subTasks['pending'][0]); // eslint-disable-line
  },
};

const actions = {
  initKanban: async ({ commit }, { sectionNum, taskNum, subTaskNum }) => {
    const kanbanSet = await createKanbanSet({ sectionNum, taskNum, subTaskNum });
    commit('SET_KANBAN_SET', kanbanSet);
  },
  updateDragStore: ({ commit }, { context, nextSibling }) => {
    commit('UPDATE_DRAG_STORE', { context, nextSibling });
  },
  SubTask: ({ commit }) => {
    commit('MOVE_SUB_TASK');
  },
};

const getters = {
  kanbanSet: state => (
    {
      team: state.team,
      tasks: state.tasks,
      subTasks: state.subTasks,
    }
  ),
  team: state => state.team,
  sections: state => state.team.sections,
  tasks: state => state.tasks,
  subTasks: state => state.subTasks,
  subTasksBySections(state) {
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
