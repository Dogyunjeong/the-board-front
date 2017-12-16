<template>
  <div class="team-board">
    <app-left-nav-layout>
      <app-layout slot="default">
        <app-row
            v-for="task in tasks"
            :key="task.id">
          <div
            @click="onTask = task">
            test {{ task.title }}
          </div>
          </app-row>
      </app-layout>
      <app-layout
          slot="content"
          class="team-section">
        <app-row
            class="team-row"
            :style="{ 'flex-wrap': 'nowrap' }">
          <app-fixed-column
            v-for="team in teams"
            :key="team.id"
            :style="{ display: 'inline-block' }">
            Team: {{ team.name }}
          </app-fixed-column>
        </app-row>
        <!-- When Task Clicked -->
        <app-row
          v-if="onTask">
          <!-- <tb-team-section
            :task="onTask"
            :teams="teams"></tb-team-section> -->
        </app-row>
        <tb-team-section>

        </tb-team-section>
      </app-layout>
    </app-left-nav-layout>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import TeamSection from './components/TeamSection';

  export default {
    data() {
      return {
        onTask: null,
      };
    },
    computed: {
      ...mapGetters({
        tasks: 'teamBoardWithTaskNav/tasks',
        teams: 'teamBoardWithTaskNav/teams',
      }),
    },
    components: {
      tbTeamSection: TeamSection,
    },
    methods: {
      working() {
        console.log('working');
      },
    },
    created() {
      this.$store.dispatch('teamBoardWithTaskNav/initTeamBoard');
    },
  };
</script>

<style scoped>
  .team-board {
    display: flex;
    overflow: unset;
    height: 100%;
    width: 100%;
    background-color: #FAFAFAFA;
  }

  .team-section {
    display: inline;
    padding: 5px;
    align-items: center;
  }
</style>
