<template>
  <div
      class="drag-section"
      @dragstart="dragStart"
      @dragover="dragOver"
      @dragend="dragEnd"
      :dndGroup="dndGroup">
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
   * 2. Value는 v-model로 연결되어 있는 값.
   * 3. It can be moveable in only same group.
  */
  export default {
    props: ['value', 'group'],
    data() {
      return {
        dndGroup: this.group ? this.group : 'dnd_default',  // eslint-disable-line
      };
    },
    methods: {
      insertElem(parentNode, insertNode, refNode) {
        const { height } = store;
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
      findFirstDndGroup(node) {
        let target = node;
        let group;
        while (target) {
          if (target.__vue__) { // eslint-disable-line
            if (target.__vue__.dndGroup) { // eslint-disable-line
              group = target.__vue__.dndGroup; // eslint-disable-line
              break;
            }
          }
          target = target.parentNode;
        }
        return group;
      },
      findMatchedDnd(dragEl, targetNode) {
        const draggedGroup = this.findFirstDndGroup(dragEl);
        let targetVm = this.findVueInstance(targetNode);
        if (!targetVm) {
          return {
            dragSection: null,
            targetVm: null,
          };
        }
        let dragSection = targetVm;
        while (dragSection) {
          if (dragSection.dndGroup === draggedGroup) { // eslint-disable-line
            break;
          }
          targetVm = dragSection;
          dragSection = dragSection.$parent;
        }
        return { dragSection, targetVm }; // eslint-disable-line
      },
      findIndex(dragEl, clone) {
        let refIndex;
        const { dragSection } = this.findMatchedDnd(dragEl, clone);
        let vueInstance = this.findVueInstance(clone.nextSibling);
        if (vueInstance && vueInstance.$parent === dragSection) {
          refIndex = vueInstance.index;
        } else if (clone.previousSibling) {
          vueInstance = this.findVueInstance(clone.previousSibling);
          refIndex = vueInstance.index + 1;
        }
        if (!refIndex || !vueInstance) {
          refIndex = 0;
        }
        return refIndex;
      },
      findDndVueInstance(node) {
        let targetVm = this.findVueInstance(node);
        let dragSection = targetVm;
        while (dragSection) {
          if (dragSection.dndGroup) {
            break;
          }
          targetVm = dragSection;
          dragSection = targetVm.$parent;
        }
        return { dragSection, targetVm };
      },
      findVueInstance(node) {
        let target = node;
        while (target) {
          if (target.__vue__) {  // eslint-disable-line
            break;
          }
          target = target.parentNode;
        }
        return target ? target.__vue__ : null;  // eslint-disable-line
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
      /**
       * 1. check the group of clone and target
       * When it is matched do the drag and drop
       *
       */
      dragOver(event) {
        const { clone, dragEl } = store;
        const { dragSection, targetVm } = this.findMatchedDnd(dragEl, event.target);
        if (!dragSection) return;
        event.stopPropagation();
        const targetEl = targetVm.$el;
        const { parentNode } = targetEl;
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
      },
      async dragEnd(event) {
        const { clone, dragEl } = store;
        const dragVue = await this.findVueInstance(dragEl);
        const refIndex = await this.findIndex(dragEl, clone);
        const { dragSection } = await this.findMatchedDnd(dragEl, clone.parentNode);
        const dropVue = dragSection;

        dragEl.style.display = '';
        dragEl.style.opacity = 1;

        if (clone.parentNode) clone.parentNode.removeChild(clone);
        if (!dragSection) return;

        event.stopPropagation();
        const moveElem = dragVue.$parent.value.slice(dragVue.index, dragVue.index + 1)[0];
        dropVue.value.splice(refIndex, 0, moveElem);
        dragVue.$parent.value.splice(dragVue.index, 1);
        dragVue.$emit('input', dragVue.$parent.value);
        dropVue.$emit('input', dropVue.value);
      },
    },
  };
</script>

<style scoped>
  .drag-section {
    width: 100%;
    height: 100%;
    display: inherit;
    flex-direction: inherit;
  }
  .default-drop {
    height: 5vh;
  }
</style>
