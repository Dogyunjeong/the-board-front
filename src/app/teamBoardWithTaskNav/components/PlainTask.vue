<template>
  <div
      class="row plain-task"
      draggable="true">
    <p class="title">{{ task.title }}</p>
  </div>
</template>

<script>
  export default {
    props: ['task'],
  };
</script>

<style lang="scss" scoped>
  .plain-task {
    display: flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;
    // padding: 5px;
    // width: 100%;
    height: 2.4em;
    margin: 0.2em;
    background-color: white;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
