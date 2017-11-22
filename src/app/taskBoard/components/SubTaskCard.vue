<template>
  <div class="sub-task-wrapper"
      droppable="true"
      @dragover="dragOver"
      @dragenter.prevent="dragEnter"
      @dragleave="dragLeave"
      @drop="dropOn"
      :style="{opacity}"
      :index="idx">
    <div class="sub-task"
        draggable="true"
        @dragstart="dragStart"
        @dragend="dragEnd"
        :id="subTaskId">
      <div class="header">
        <p draggable="false" droppable="false">{{ title }}</p>
      </div>
      <div class="body">
        <div class="status-panel">
          <div class="status">1</div>
          <div class="status">2</div>
          <div class="status">3</div>
          <div class="status">4</div>
        </div>
        <div class="content-panel">
          <p draggable="false"  droppable="false">{{ content }}</p>
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
      idx: {
        type: Number,
      },
    },
    data() {
      return {
        ...this.subTask,
        opacity: 1,
        animate: false,
      };
    },
    methods: {
      insertElem(dragItem) {
        setTimeout(() => {
          this.animate = false;
        }, 100);
        // dragItem.elem.animate({ height: ['0px',
        // ''.concat(this.$el.getClientRects()[0].height, 'px')] }, 100);
        dragItem.elem.animate({
          translateY: ['-'.concat(this.$el.getClientRects()[0].height, 'px'), '0px'],
        }, 500);
        if (dragItem.elem === this.$el.nextSibling) {
          return this.$el.parentNode.insertBefore(dragItem.elem, this.$el);
        }
        if (dragItem.elem !== this.$el) {
          return this.$el.parentNode.insertBefore(dragItem.elem, this.$el.nextSibling);
        }
        return null;
      },
      dragStart(event) {
        console.log('dragStart');
        const clone = this.$el.cloneNode(true);

        clone.style.opacity = 0.2;
        this.opacity = 0.2;

        event.dataTransfer.setData('data', { section: this.section, index: this.idx });

        this.$store.dispatch('updateDragElem', { section: this.section, elem: this.$el });
        this.$store.dispatch('updateClonedElem', { section: this.section, elem: clone, index: this.idx });
      },
      dragOver() {
        console.log('dragOver');
        console.log(this.idx);
        console.log(this.$el);
        console.log(this.$el.parentNode.childNodes[this.idx]);
        if (!this.animate) {
          this.animate = true;
          const dragItem = this.$store.getters.clonedElem;
          this.insertElem(dragItem);
        }
        console.log(this.$el.nextSibling);
        return null;
      },
      dragEnd() {
        console.log('dragEnd');
      },
      dragEnter() {
        return false;
      },
      dragLeave() {
        console.log('dragLeave');
      },
      dropOn(event) {
        console.log('dropOn');
        console.log(event.dataTransfer.getData('text'));
      },
    },
  };
</script>

<style lang="scss">

  .sub-task-wrapper{
    padding: 10px;
    animation-name: slide;
    animation-duration: 0.2s;
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
