<template>
  <div class="layout">
    <app-row
        class="team-title">
      <app-fixed-column
          v-for="team in teams"
          :key="team.id"
          :style="{ display: 'inline-block' }">
        Team: {{ team.name }}
      </app-fixed-column>
    </app-row>
    <app-row
        v-if="task">
      <app-row>
        {{ task.assignedTeams}}

      </app-row>
      <app-row>
        <app-fixed-column
          v-for="team in teams"
          :key="team.id"
          class="team-task line-between-column">
          <div v-if="isAssigned(team.id)" class="task-status">
            {{ task.assignedTeams[team.id]}}
          </div>
        </app-fixed-column>
      </app-row>
      <!-- <tb-team-section
        :task="onTask"
        :teams="teams"></tb-team-section> -->
    </app-row>
    <app-row
        class="board-section">
      <app-fixed-column
          class="team-column line-between-column"
          v-for="team in teams"
          :key="team.id">
        <tb-team-list
          :teamId="team.id"></tb-team-list>
      </app-fixed-column>
    </app-row>
    <!-- When Task Clicked -->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import TeamList from './TeamList';

  export default {
    props: ['task'],
    computed: {
      ...mapGetters({
        teams: 'teamBoardWithTaskNav/teams',
        tasks: 'teamBoardWithTaskNav/tasks',
      }),
    },
    components: {
      tbTeamList: TeamList,
    },
    methods: {
      isAssigned(teamId) {
        if (!this.task) {
          return false;
        }
        console.log('working');
        console.log('teamId: ', teamId);
        return Object.keys(this.task.assignedTeams).indexOf(teamId) > -1;
      },
    },
  };
</script>

<style scoped leng="scss">
  .team-title {
    flex-wrap: nowrap;
    min-height: 2em;
    vertical-align: middle;
  }

  /* .team-task {
    height: 5em;
  } */

  .board-section {
    display: flex;
    flex-wrap: nowrap;
  }

  .team-column {
    display: inline-block;
    text-align: center;
  }
</style>
