<template>
  <panel :class="$style.panel" title="Footer">
    <section :class="$style.content">
      <ul>
        <li>
          <i class="iconfont icon-guanfang"></i>
          <span>官方品质保证</span>
        </li>
        <li>
          <i class="iconfont icon-baoyou"></i>
          <span>全场满99包邮</span>
        </li>
        <li>
          <i class="iconfont icon-qitian"></i>
          <span>7天无理由退货</span>
        </li>
        <li>
          <i class="iconfont icon-dizhi"></i>
          <span>售后网点 全国覆盖</span>
        </li>
      </ul>
      <div>Copyright © 2014-2018 科沃斯机器人</div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "footor",
    components: {
      Panel,
    }
  }
</script>

<style lang="scss" module>

  .panel {
    @include panel;
    > h4 {
      display: none;
    }
    margin-bottom: 26px;
    .content {
      background: #f3f3f3;
      ul {
        @include flex(row);
        margin: 20px 40px;
        li {
          width: 50%;
          height: 54px;
          line-height: 54px;
          padding: 10px 0;
          i {
            font-size: 52px;
            vertical-align: middle;
          }
          span {
            font-size: 24px;
            color: rgb(102, 102, 102);
          }
        }
      }
      div {
        padding: 26px;
        text-align: center;
        font-size: 24px;
        color: #999;
      }
    }
  }

</style>
