<template>
  <panel :class="$style.panel" title="分类浏览">
    <section :class="$style.content">
      <i class="iconfont icon-jiugongge"></i>
      <span>分类浏览</span>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "classify",
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
    .content {
      height: 96px;
      line-height: 96px;
      text-align: center;
      border-bottom: 1px solid #eee;
      i {
        font-size: 28px;
        color: rgb(255, 0, 17);
      }
      span {
        font-size: 28px;
        color: #9f9f9f;
      }
    }
  }

</style>
