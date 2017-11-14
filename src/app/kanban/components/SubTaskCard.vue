<template>
  <div class="sub-task">
    <div class="header">
      <p>Header</p>
    </div>
    <div class="body">
      <div class="status-panel">
        <div class="status">1</div>
        <div class="status">2</div>
        <div class="status">3</div>
        <div class="status">4</div>
      </div>
      <div class="content"> </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  .sub-task {
    margin: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,0.2),0 1px 4px 0 rgba(0,0,0,0.19);
  }
  .header {
    background-color: #29B6F6;
    margin: 0px;
    padding: 10px 0px;

    p {
      height: 100%;
      text-align: center;
      margin: 0px;
      padding: 0px;
    }
  }
</style>
