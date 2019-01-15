<template>
  <panel :class="$style.panel" title="导航栏">
    <section :class="$style.content">
      <router-link to="/">
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/classify">
        <i class="iconfont icon-fenlei"></i>
        <p>分类</p>
      </router-link>
      <router-link to="/cart">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/user">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </router-link>
    </section>
  </panel>
</template>

<script>
  import Panel from "../abstract/panel"

  export default {
    name: "navbar",
    components: {
      Panel,
    }
  }
</script>

<style lang="scss">
  .activeF {
    color: #8B0000 !important;
  }
</style>

<style lang="scss" module>

  .panel {
    @include panel;
    > h4 {
      display: none;
    }
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    .content {
      @include flex(row);
      justify-content: space-around;
      text-align: center;
      height: 92px;
      a {
        text-decoration: none;
        color: #777;
        padding: 12px 0;
        i {
          font-size: 44px;
        }
        p {
          font-size: 24px;
        }
      }

    }

  }

</style>
