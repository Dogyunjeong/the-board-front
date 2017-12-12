<template>
  <div>
    <div class="row">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  export default {
  };
</script>

<style>
  .row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

</style>
