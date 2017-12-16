<template>
    <div class="scroll-row">
      <slot></slot>
    </div>
</template>

<script>
  export default {
  };
</script>

<style>
  .scroll-row {
    display: flex;
    width: 100%;
    overflow-x: auto;
    overflow: hidden;
    flex-wrap: nowrap;
    flex-direction: row;
  }

</style>
