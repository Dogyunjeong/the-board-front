<template>
  <div>
    <div class="fixed-column">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  export default {
  };
</script>

<style>
  .fixed-column {
    width: 250px;
    height: 100%;
    border-right: 2px solid red;
  }

</style>
