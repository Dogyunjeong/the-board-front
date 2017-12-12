<template>
  <div class="sub-task-wrapper"
      :style="{opacity}"
      :index="index">
    <!-- <div class="sub-task"
        draggable="true"
        @dragstart="dragStart"
        @dragend="dragEnd"
        @dragover.prevent="dragOver"
        @dragenter.prevent="dragEnter"
        @dragleave="dragLeave"
        @drop="dropOn"
        :id="subTask.subTaskId"> -->
    <div class="sub-task"
        :id="subTask.subTaskId"
        draggable="true">
      <div class="header">
        <p draggable="false" droppable="false">{{ subTask.title }}</p>
      </div>
      <div class="body">
        <div class="status-panel">
          <div class="status">1</div>
          <div class="status">2</div>
          <div class="status">3</div>
          <div class="status">4</div>
        </div>
        <div class="content-panel">
          <p draggable="false"  droppable="false">{{ subTask.content }} // {{ subTask.section }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      subTask: {
        type: Object,
      },
      index: {
        type: Number,
      },
    },
    data() {
      return {
        opacity: 1,
      };
    },
  };
</script>

<style scoped lang="scss">

  .sub-task-wrapper{
    padding: 10px;
  }
  .sub-task {
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,0.2),0 1px 4px 0 rgba(0,0,0,0.19);
  }

  .sub-task:hover {
    color: #00838F;
    will-change: box-shadow;
    transition: box-shadow .2s cubic-bezier(.4, 0, 1, 1), background-color .2s cubic-bezier(.4, 0, .2, 1), color .2s cubic-bezier(.4, 0, .2, 1);
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, .14), 0 3px 1px -6px rgba(0, 0, 0, .2), 2px 5px 3px 0 rgba(0, 0, 0, .12);
  }
  .header {
    background-color: #29B6F6;
    margin: 0px;
    padding: 10px 0px;

    p {
      text-align: center;
      margin: 0px;
      padding: 0px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 85px;

    .status-panel {
      width: 20%;
      min-width: 30px;
      background-color: red;
    }

    .content-panel {
      width: 200px;
      height: 100%;
      display: flex;
      justify-content: space-around;
    }

    p {
      position: relative;
      margin: 0px;
      padding: 0px;
      line-height: 21px;
      max-height: 84px;
      white-space: normal;
      // overflow-wrap: break-word;
      // word-break: break-all;
      text-overflow: ellipsis;
      // word-wrap: break-word;
      overflow: hidden;
    }
  }

  @keyframes slide {
    from {
      transform: translateY(-146px)
    }

    to {
      transform: translateY(0px)
    }
  }



</style>
