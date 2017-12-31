<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<script>
  export default {
  };
</script>

<style>
  .layout {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

</style>
