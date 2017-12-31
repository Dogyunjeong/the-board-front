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
    min-width: 12em;
    width: 12em;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
</style>
