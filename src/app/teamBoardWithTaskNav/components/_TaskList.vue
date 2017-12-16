<template>
  <div class="task-list-wrapper">
    <app-layout
        v-for="(task, taskIdx) in tasksByReferenceId"
        :key="task.id"
        class="task-list">
      <app-row>
        {{ task.title }}
      </app-row>
      <app-scroll-row
          class="assigned-row">
        <app-fixed-column
            v-for="assignedTeam in task.assignedTeams"
            :key="assignedTeam.name"
            class="team-wrapper">
          <div>{{ assignedTeam.subTaskProcess.current }} / {{ assignedTeam.subTaskProcess.max }}</div>
        </app-fixed-column>
      </app-scroll-row>
    </app-layout>
  </div>
</template>

<script>
  export default {
    props: ['referenceId'],
    computed: {
      tasksByReferenceId: {
        get() {
          console.log(this.$store.getters['teamBoard/tasksByReferenceId'](this.referenceId));
          return this.$store.getters['teamBoard/tasksByReferenceId'](this.referenceId);
        },
      },
    },
  };
</script>

<style scoped>
  .task-list {
    box-shadow: 0px 0px 1px 1px #e0e0e0;
  }

  .assigned-row {
    height: 7%;
    min-height: 23px;
  }
</style>
