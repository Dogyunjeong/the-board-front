<template>
  <div class="kanban">
    <app-list-section v-for="(listName, index) in 10" :key="index" :listName="listName"></app-list-section>
  </div>
</template>

<script>
  // TODO: 이거 글로벌 컴포넌트로 빼야 하려나
  import ListSection from './components/ListSection';

  export default {
    data() {
      return {
        list: ['todo', 'developing', 'pull-request'],
      };
    },
    components: {
      appListSection: ListSection,
    },
  };
</script>

<style scoped>
  .kanban {
    overflow: auto;
    white-space: nowrap;
    height: 100vh;
    background-color: #A5D6A7;
  }
  .list-section {
  }
</style>
