<template>
  <panel :class="$style.panel" title="图标区">
    <section :class="$style.content">
      <router-link to="/classify" tag="div" :class="$style.item">
        <i class="iconfont icon-fenlei"></i>
        <p>产品分类</p>
      </router-link>
      <router-link
        tag="div"
        :class="$style.item"
        v-for="item in items"
        :key="item.id"
        :to="{name:'detail',params:{id:item.id}}"
      >
        <i class="iconfont icon-lihe"></i>
        <p>活动专区</p>
      </router-link>
      <router-link to="/default" tag="div" :class="$style.item">
        <i class="iconfont icon-zuanshi"></i>
        <p>积分商城</p>
      </router-link>
      <router-link to="/default" tag="div" :class="$style.item">
        <i class="iconfont icon-biaoqian"></i>
        <p>企业团购</p>
      </router-link>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "hicon",
    components: {
      Panel
    },
    props: {
      items: Array
    },

  }
</script>


<style lang="scss" module>

  .panel {
    @include panel;
    padding: 24px 0;
    > h4 {
      display: none;
    }
    .content {
      @include flex(row);
      text-align: center;
      .item {
        width: 25%;
        height: 98px;
        color: #666;
        i {
          font-size: 44px;
        }
        P {
          margin-top: 14px;
          font-size: 24px;
        }
      }
    }
  }

</style>
