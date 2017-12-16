<template>
  <app-scroll-row
      class="reference-row">
    <app-fixed-column>
      <div class="reference-wrapper">{{ idx }} : {{ reference.id }}</div>
    </app-fixed-column>
    <app-task-brief
        v-if="onTask">

    </app-task-brief>
    <app-task-list
        v-else
        :referenceId="reference.id">
    </app-task-list>
  </app-scroll-row>
</template>

<script>
  import TaskList from './TaskList';

  export default {
    props: ['reference', 'idx'],
    data() {
      return {
        onTask: false,
      };
    },
    components: {
      appTaskList: TaskList,
    },
  };
</script>

