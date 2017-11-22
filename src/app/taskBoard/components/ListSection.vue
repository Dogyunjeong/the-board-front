<template>
  <div class="section">
    <div class="section-wrapper">
      {{ section }}
      <transition-group name="slide" mode="out-in">
        <app-sub-task-card
            v-for="(subTask, idx) in  subTasks"
            :key="idx"
            :idx="idx"
            :subTask="subTask"></app-sub-task-card>
      </transition-group>

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

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s ease;
    opacity: 0;
  }
  .slide-leave {
      opacity: 1;
      transform: translateX(0);
  }

  .slide-enter-active {
      animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-in {
      0% {
          transform: translateY(-30px);
      }
      100% {
          transform: translateY(0);
      }
  }
  @keyframes slide-out {
      0% {
          transform: translateY(0);
      }
      100% {
          transform: translateY(-30px);
      }
  }
</style>
