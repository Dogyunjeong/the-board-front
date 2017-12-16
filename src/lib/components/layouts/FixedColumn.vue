<template>
  <div class="fixed-column">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="scss">
  .fixed-column {
    min-width: 200px;
    display: flex;
    flex-wrap: wrap;
  }
</style>
