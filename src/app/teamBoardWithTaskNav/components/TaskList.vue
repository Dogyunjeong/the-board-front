<template>
  <div class="layout">
    <app-drag-and-drop
        v-model="teamTasksBySection"
        :group="teamId">
      <tb-plain-task
          v-for="(task, idx) in teamTasksBySection"
          :key="task.id"
          :index="idx"
          :task="task"
          draggable="true">
      </tb-plain-task>
    </app-drag-and-drop>
  </div>
</template>

<script>
  import PlainTask from './PlainTask';

  export default {
    props: ['teamId', 'section'],
    computed: {
      teamTasksBySection: {
        get() {
          return this.$store.getters['teamBoardWithTaskNav/teamTasksBySection'](this.teamId, this.section);
        },
        set(value) {
          this.$store.dispatch('teamBoardWithTaskNav/updateTeamTasksBySection', { teamId: this.teamId, section: this.section, value });
        },
      },
    },
    components: {
      tbPlainTask: PlainTask,
    },
  };
</script>
