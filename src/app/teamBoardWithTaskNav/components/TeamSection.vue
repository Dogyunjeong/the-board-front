<template>
  <app-row
      class="board-section">
    <app-fixed-column
        class="team-column"
        v-for="team in teams"
        :key="team.id">
      <app-row
          class="section-wrapper box-shadow"
          v-for="section in teamSections(team.id)"
          :key="section">
        <app-row
            class="section-title">
            {{ section }}
        </app-row>
        <tb-task-list :teamId="team.id" :section="section"></tb-task-list>

      </app-row>
    </app-fixed-column>
  </app-row>
</template>

<script>
  import { mapGetters } from 'vuex';

  import TaskList from './TaskList';

  export default {
    computed: {
      ...mapGetters({
        teams: 'teamBoardWithTaskNav/teams',
        tasks: 'teamBoardWithTaskNav/tasks',
        teamSections: 'teamBoardWithTaskNav/teamSections',
      }),
    },
    components: {
      tbTaskList: TaskList,
    },
  };
</script>

<style scoped leng="scss">
  .board-section {
    display: flex;
    flex-wrap: nowrap;
  }

  .section-wrapper {
    background: green;
    /* margin: 1em 0.2em 1em 0.2em; */
    margin: 20px 10px;
    width: calc(100% - 20px);
  }

  .section-title {
    padding: 20px 2px;
    width: 100%;
  }

  .team-column {
    display: inline-block;
    text-align: center;
  }

  .team-column:not(:first-child) {
    border-left: 1px solid rgba(0, 0, 0, 0.075);
  }
</style>
