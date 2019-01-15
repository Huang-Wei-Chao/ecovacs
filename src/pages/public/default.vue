<template>
  <panel :class="$style.panel">
    <section :class="$style.content">
      <div>暂无相关页面</div>
      <div>{{ $route.params.id }}</div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../abstract/panel"

  export default {
    name: "default",
    components: {
      Panel
    }
  }
</script>

<style lang="scss" module>
  .panel {
    @include panel;
    > h4 {
      display: none;
    }
    background: #f5f5f5;
    .content {
      div {
        width: 100%;
        padding-top: 250px;
        font-size: 40px;
        color: #333333;
        text-align: center;
      }
    }
  }

</style>
