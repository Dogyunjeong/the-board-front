<template>
  <div>
    <div class="task-board"
        droppable="true">
      <app-task-list-section
          v-for="(section, index) in sections"
          :key="index"
          :section="section"></app-task-list-section>
    </div>
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
    computed: {
      sections() {
        return this.$store.getters['taskBoard/sections'];
      },
    },
    components: {
      appTaskListSection: ListSection,
    },
  };
</script>

<style>
  .task-board {
    display: flex;
    flex-wrap: nowrap;
    overflow: unset;
    min-height: 100vh;
    background-color: #A5D6A7;
  }
</style>
