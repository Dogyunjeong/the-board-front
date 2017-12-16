<template>
  <div class="left-nav-layout">
    <div class="flot-button">
    </div>
    <nav class="left-nav">
      <div class="left-nav-content">
        <slot name="default"></slot>
      </div>
    </nav>
    <div class="content">
      <slot name="content"></slot>
      </slot>
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
  }

  .flot-button {
    display: none;
  }
  .content {
    width: calc(100vw - 15em);
    display: flex;
    overflow: auto;
    flex-wrap: nowrap;
  }

  .left-nav {
    width: 15em;
    transition: all .3s ease-in;
    height: 100%;
    min-height: 100vh;
    background: #3e50b4;
  }

  .left-nav-content {
    position: absolute;
    overflow: auto;
    height: 100%;
    min-height: 100vh;
    width: 15em;
    &::-webkit-scrollbar {
        width: .9rem;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      border: 4px solid transparent;
      background-clip: content-box;
      background-color: rgba(white,0.5);
    }
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
