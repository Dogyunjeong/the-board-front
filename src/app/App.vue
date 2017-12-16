<template>
  <div id="app">
      <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    return this.$store.dispatch('taskBoard/initKanban', {
      sectionNum: 6,
      taskNum: 10,
      subTaskNum: 20 });
  },
};
</script>

<style scoped>
  #app {
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0px;
    background: #fafafa;
  }
</style>
