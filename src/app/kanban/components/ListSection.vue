<template>
  <div class="list-section">
    <div class="list-wrapper">
      {{ listName }}
      <app-sub-task-card></app-sub-task-card>
    </div>
  </div>
</template>

<script>
  import SubTaskCard from './SubTaskCard';

  export default {
    props: ['listName'],
    components: {
      appSubTaskCard: SubTaskCard,
    },
  };
</script>

<style scoped>
  .list-section {
    width: 250px;
    height: 100%;
    margin: 0px 5px;
    display: inline-block;
  }

  .list-wrapper {
    background-color: #f0f0f0;
    padding-bottom: 10px;
    border-radius: 10px;
  }
</style>
