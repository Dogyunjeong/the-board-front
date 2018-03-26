<template>
  <div>
    <app-drag-and-drop
      v-model="teamSections"
      :group="'team-board' + teamId">
        <template></template>
      <tb-task-section
          v-for="(section, index) in teamSections"
          :key="section"
          :teamId="teamId"
          :index="index"
          :section="section"
          draggable="true">
      </tb-task-section>
    </app-drag-and-drop>
  </div>
</template>

<script>
  import TaskSection from './TaskSection';

  export default {
    props: ['teamId'],
    computed: {
      teamSections: {
        get() {
          const sections = this.$store.getters['teamBoardWithTaskNav/teamSections'](this.teamId);
          if (!sections) {
            console.log(this.teamId);
          }
          return this.$store.getters['teamBoardWithTaskNav/teamSections'](this.teamId);
        },
        set(value) {
          console.log('value: ', value);
          return this.$store.dispatch('teamBoardWithTaskNav/updateTeamSection', { teamId: this.teamId, sections: value });
        },
      },
    },
    components: {
      tbTaskSection: TaskSection,
    },
  };
</script>
