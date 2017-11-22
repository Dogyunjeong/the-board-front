<template>
  <div>
    <div class="task-board">
      <app-list-section
          v-for="(section, index) in sections"
          :key="index"
          :section="section"></app-list-section>
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
        return this.$store.getters.sections;
      },
    },
    components: {
      appListSection: ListSection,
    },
    created() {
      return this.$store.dispatch('initKanban', {
        sectionNum: 4,
        taskNum: 10,
        subTaskNum: 20 });
    },
    methods: {},
  };
</script>

<style>
  .task-board {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    height: 100vh;
    background-color: #A5D6A7;
  }
</style>
