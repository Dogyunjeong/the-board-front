<template>
  <div class="section">
    <div class="section-wrapper">
      {{ section }}
      <div class="section-body"
          :section="section">
        <app-sub-task-card
            v-for="(subTask, idx) in  subTasks"
            :key="idx"
            :idx="idx"
            :subTask="subTask"></app-sub-task-card>
         </div>
      </div>
  </div>
</template>

<script>
  import SubTaskCard from './SubTaskCard';

  export default {
    props: ['section'],
    data() {
      return {
        dummyId: 'dummy-sub-task',
      };
    },
    computed: {
      subTasks() {
        console.log(this.section);
        return this.$store.getters.subTasksBySections(this.section);
      },
    },
    components: {
      appSubTaskCard: SubTaskCard,
    },
    methods: {},
  };
</script>

<style scoped>
  .section {
    width: 250px;
    height: 100%;
    margin: 0px 5px;
    display: inline-block;
  }

  .section-wrapper {
    background-color: #f0f0f0;
    padding-bottom: 10px;
    border-radius: 10px;
  }

</style>
