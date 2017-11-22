// import { Packet } from "_debugger";
import createKanbanSet from '../../../test/createDataSet'; //eslint-disable-line

const state = {
  team: {},
  tasks: [],
  subTasks: [],
  dragElem: {},
  clonedElem: {},
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
  'UPDATE_DRAG_ELEM': (state, { section, elem }) => {
    state.dragElem = { section, elem };
  },
  'UPDATE_CLONE_ELEM': (state, { section, elem, index }) => {
    state.clonedElem = { section, elem, index };
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
  updateDragElem: ({ commit }, { section, elem }) => {
    commit('UPDATE_DRAG_ELEM', { section, elem });
  },
  updateClonedElem: ({ commit }, { section, elem, index }) => {
    commit('UPDATE_CLONE_ELEM', { section, elem, index });
  },
  moveSubTask: ({ commit }) => {
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
  dragElem: state => state.dragElem,
  clonedElem: state => state.clonedElem,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
