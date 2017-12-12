<template>
  <div>
    <div class="layout">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  export default {
  };
</script>

<style>
  .layout {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: column;
  }

</style>
