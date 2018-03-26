<template>
  <div class="section">
    <div class="section-wrapper">
      {{ section }} {{ subTasks.length }}
      <div class="section-body"
          :section="section">
        <app-drag-and-drop
          v-model="subTasks">
          <app-sub-task-card
            v-for="(subTask, index) in  subTasks"
            :key="index"
            :index="index"
            :subTask="subTask"></app-sub-task-card>
        </app-drag-and-drop>
      </div>
    </div>
  </div>
</template>

<script>
  import SubTaskCard from './SubTaskCard';

  export default {
    props: ['section'],
    computed: {
      subTasks: {
        get() {
          return this.$store.getters['taskBoard/subTasksBySection'](this.section);
        },
        set(value) {
          console.log('update value', value);
          console.log(this.section);
          this.$store.dispatch('taskBoard/updateSubTaskBySection', { section: this.section, subTasks: value });
        },
      },
    },
    components: {
      appSubTaskCard: SubTaskCard,
    },
  };
</script>

<style scoped>

</style>
