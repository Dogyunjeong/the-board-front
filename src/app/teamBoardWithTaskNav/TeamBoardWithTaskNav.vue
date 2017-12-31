<template>
  <div class="team-board-with-task-nav">
    <tb-create-task v-if="onCreateTask" :closePanel="closeCreateTaskPanelHandeler" :teams="teams"></tb-create-task>
    <!-- TODO: 팀 생성과정에서 member assign을 할지 결정해야함. -->
    <tb-create-team v-if="onCreateTeam" :closePanel="closeCreateTeamPanelHandeler"></tb-create-team>
    <app-left-nav-layout>
      <div slot="default">
        <div
            id="add-task-button"
            class="floating-btn"
            @click="onCreateTask = !onCreateTask">
          add Task
        </div>
        <app-row
            class="task-in-nav"
            v-for="task in tasks"
            :key="task.id"
            @click.native="onTask = task">
          test {{ task.title }}
        </app-row>
      </div>
      <app-layout
          slot="content"
          class="team-list-wrapper">
        <div
            id="add-team-button"
            class="floating-btn"
            @click="onCreateTeam = !onCreateTeam">add Team</div>
        <tb-team-section :task="onTask"></tb-team-section>
      </app-layout>
    </app-left-nav-layout>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import TeamSection from './components/TeamSection';
  import CreateTask from './components/CreateTask';
  import CreateTeam from './components/CreateTeam';

  export default {
    data() {
      return {
        onTask: '',
        onCreateTask: false,
        onCreateTeam: false,
      };
    },
    computed: {
      ...mapGetters({
        tasks: 'teamBoardWithTaskNav/tasks',
        teams: 'teamBoardWithTaskNav/teams',
      }),
      teamRowOpen() {
        console.log('onTask: ', this.onTask);
        if (this.onTask) {
          return false;
        }
        return true;
      },
    },
    watch: {
      onTask() {
        console.log('this.onTask: ', this.onTask);
      },
    },
    components: {
      tbTeamSection: TeamSection,
      tbCreateTask: CreateTask,
      tbCreateTeam: CreateTeam,
    },
    methods: {
      setTask(task) {
        console.log('working: ', task);
      },
      closeCreateTaskPanelHandeler() {
        this.onCreateTask = !this.onCreateTask;
      },
      closeCreateTeamPanelHandeler() {
        this.onCreateTeam = !this.onCreateTeam;
      },
    },
    created() {
      this.$store.dispatch('teamBoardWithTaskNav/initTeamBoard');
    },
  };
</script>

<style scoped>
  #add-team-button {
    background-color: yellow;
    right: 3em;
  }

  .team-board-with-task-nav {
    display: flex;
    overflow: auto;
    height: 100%;
    width: 100%;
    background-color: #FAFAFAFA;
  }

  .team-list-wrapper {
    display: inline;
    align-items: center;
  }

  .task-in-nav {
    cursor: pointer;
  }
</style>
