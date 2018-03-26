<template>
  <app-row class="section-wrapper box-shadow">
    <app-row
        class="section-title">
        {{ section }}
    </app-row>
    <tb-task-list :teamId="teamId" :section="section"></tb-task-list>
  </app-row>
</template>

<script>
  import TaskList from './TaskList';

  export default {
    props: ['teamId', 'section', 'index'],
    components: {
      tbTaskList: TaskList,
    },
  };
</script>

<style scoped lang="scss">
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

</style>
