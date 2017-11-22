import Vue from 'vue';

Vue.directive('drag-and-drop', {
  params: [
    'drag-start',
    'drag-over',
    'drag-enter',
    'drag-leave',
    'drag-end',
    'drop',
  ],
});
