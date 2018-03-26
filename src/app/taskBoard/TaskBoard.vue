<template>
  <div>
    <div class="task-board"
        droppable="true">
      <div
          id="add-sub-task-button"
          class="floating-btn"
          @click="onCreateSection = !onCreateSection">add Sub Task</div>
      <task-list-section
          v-for="(section, index) in sections"
          :key="index"
          :section="section"></task-list-section>
      <template>
        <div class="section">
          <div class="section-wrapper">
            <label for="section-name">Add section</label>
            <input type="text">
            <button></button>
          </div>
        </div>
      </template>
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
    methods: {

    },
    components: {
      taskListSection: ListSection,
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
