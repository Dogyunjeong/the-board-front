<template>
  <div
      class="drag-section"
      @dragstart="dragStart"
      @dragover="dragOver"
      @dragend="dragEnd">
    <slot></slot>
    <div
      class="default-drop"
      v-if="!value.length"
      draggable="false">
    </div>
  </div>
</template>

<script>
  import store from './store';
  /**
   * 1. Array Data를 감싼다.
   * 2. m
  */
  export default {
    props: ['value'],
    methods: {
      insertElem(parentNode, insertNode, refNode) {
        const height = store.height;
        setTimeout(() => {
          insertNode.animated = false; // eslint-disable-line
        }, 200);
        if (!insertNode.animated) {
          insertNode.animated = true; // eslint-disable-line
          insertNode.animate({ height: ['0px', ''.concat(height, 'px')] }, 200);
          if (refNode) parentNode.insertBefore(insertNode, refNode);
          else parentNode.appendChild(insertNode);
        }
        return null;
      },
      findVueInstance(node) {
        let target = node;
        while (!target.__vue__) {  // eslint-disable-line
          target = target.parentNode;
        }  // eslint-disable-line
        return target.__vue__;  // eslint-disable-line
      },
      dragStart(event) {
        const dragVm = this.findVueInstance(event.target);
        const dragEl = dragVm.$el;
        const clone = dragEl.cloneNode(true);
        clone.style.opacity = 0.2;
        dragEl.style.opacity = 0.2;
        clone.animated = false;
        store.clone = clone;
        store.dragEl = dragEl;
        store.height = dragEl.getClientRects()[0].height;
      },
      dragOver(event) {
        const clone = store.clone;
        const dragEl = store.dragEl;
        const targetVm = this.findVueInstance(event.target);
        const targetEl = targetVm.$el;
        const parentNode = targetEl.parentNode;
        // console.log('clone: ', clone);
        // console.log('dragEl: ', dragEl);
        // console.log('targetEl: ', targetEl);
        // console.log('parentNode: ', parentNode);
        // console.log('targetEl.nextSibling: ', targetEl.nextSibling);
        if (!clone.animated && clone !== event.target && !clone.contains(event.target)) {
          if (event.target.className === 'default-drop' || (clone.nextSibling && clone.nextSibling.className === 'default-drop')) {
            if (!targetEl.contains(clone)) {
              this.insertElem(targetEl, clone, event.target);
            }
          } else if (targetEl === targetEl.parentNode.lastChild && !clone.animated) {
            this.insertElem(parentNode, clone);
          } else if (clone.nextSibling === targetEl) {
            this.insertElem(parentNode, clone, targetEl.nextSibling);
          } else {
            this.insertElem(parentNode, clone, targetEl);
          }
          dragEl.style.display = 'none';
        }
        return null;
      },
      dragEnd() {
        const clone = store.clone;
        let refIndex;
        if (clone.nextSibling) {
          refIndex = this.findVueInstance(clone.nextSibling).index;
        } else if (clone.previousSibling) {
          refIndex = this.findVueInstance(clone.previousSibling).index;
        } else {
          refIndex = 0;
        }

        const dragEl = store.dragEl;
        dragEl.style.display = '';
        dragEl.style.opacity = 1;
        const dragVue = this.findVueInstance(dragEl);
        const dropVue = this.findVueInstance(clone);

        clone.parentNode.removeChild(clone);
        const moveElem = dragVue.$parent.value.splice(dragVue.index, 1)[0];
        dragVue.$emit('input', dragVue.value);

        dropVue.value.splice(refIndex, 0, moveElem);
        dropVue.$emit('input', dropVue.value);
      },
    },
  };
</script>

<style scoped>
  .default-drop {
    height: 5vh;
  }
</style>
