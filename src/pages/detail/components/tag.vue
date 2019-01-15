<template>
  <panel :class="$style.panel">
    <section :class="$style.content">
      <span>发货快</span>
      <span>官网值得信赖</span>
      <span>服务好</span>
      <span>清洁效果好</span>
      <span>包装不错</span>
      <span>性价比高</span>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "tag",
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
      span {
        display: inline-block;
        padding: 8px 26px;
        margin-right: 12px;
        margin-bottom: 12px;
        font-size: 26px;
        color: #9f9f9f;
        background: #fdf4f4;
      }
    }
  }

</style>
