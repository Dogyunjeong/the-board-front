<template>
  <div id="app" class="layout">
    <div class="nav-title-bar">
      <app-header></app-header>
    </div>
    <div class="nav-title-content">
      <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'app',
  components: {
    appHeader: Header,
  },
  created() {
    console.log('created');
    console.log(this.$io);
    this.$socket.emit('test', 'form app.vue');
    return this.$store.dispatch(
      'taskBoard/initKanban',
      {
        sectionNum: 6,
        taskNum: 10,
        subTaskNum: 20,
      },
    );
  },
};
</script>

<style lang="scss">
  @import '../styles/layout.scss';

  #app {
    margin: 0px;
    background: #fafafa;
  }
</style>
