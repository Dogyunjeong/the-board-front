<template>
  <div class="team-board">
    <app-row class="header-row">
      <div class="hader"></div>
    </app-row>
    <app-reference-row
        v-for="(reference, idx) in references"
        :key="reference.id"
        :idx="idx"
        :reference="reference">
    </app-reference-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import ReferenceRow from './components/ReferenceRow';

  export default {
    computed: {
      ...mapGetters({
        teams: 'teamBoard/teams',
        references: 'teamBoard/references',
      }),
    },
    components: {
      appReferenceRow: ReferenceRow,
    },
    created() {
      this.$store.dispatch('teamBoard/initTeamBoard');
    },
  };
</script>

<style scoped>
  .team-board {
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    margin: 10px;
  }
  .block {
    width: 200px;
    border-right: 2px solid red;
    padding: 10px 0px 10px 10px;
  }

  .reference-row {
    background: white;
    box-shadow: 0px 0px 1px 1px #e0e0e0;
  }
</style>
