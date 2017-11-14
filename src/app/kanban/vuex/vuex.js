const state = {
  team: {},
  tasks: [],
  subTasks: [],
};

const mutations = {
  'SET_KABAN_SET': (state, kanbanSet) => {
    state.team = kanbanSet.team;
    state.tasks = kanbanSet.tasks;
    state.subTasks = kanbanSet.subTasks;
  }
}

const actions = {

}

