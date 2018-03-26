<template>
  <div class="left-nav-layout">
    <div class="flot-button">
    </div>
    <nav class="left-nav primary-scroll">
      <slot name="default"></slot>
    </nav>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        onClick: false,
      };
    },
  };
</script>

<style lang="scss">
  .left-nav-layout {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .flot-button {
    display: none;
  }
  .content {
    width: calc(100% - 15em + 0.9em);
    height: 100%;
    display: flex;
    // overflow: auto;
    flex-wrap: nowrap;
    overflow: auto;
  }

  .left-nav {
    width: 15em;
    transition: all .3s ease-in;
    height: 100%;
    background: #3e50b4;
    flex-wrap: nowrap;
    overflow-y: scroll;
  }

  @media (max-width: 960px) {
    .content {
      width: 100%;
    }

    .left-nav {
      display: none;
    }

    .flot-button {
      display: '';
    }
  };
</style>
