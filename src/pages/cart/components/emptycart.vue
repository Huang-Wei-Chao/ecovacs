<template>
  <panel :class="$style.panel" title="购物车">
    <section :class="$style.content">
      <div :class="$style.item">
        <p>您的购物车还是空的！</p>
        <router-link to="/">马上去购物</router-link>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "cart",
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
      height: 208px;
      padding: 48px 96px 100px;
      background: #f3f3f3;
      .item {
        font-size: 32px;
        text-align: center;
        p {
          line-height: 120px;
          color: rgb(102, 102, 102);
        }
        a {
          height: 88px;
          line-height: 88px;
          padding: 20px 144px;
          text-decoration: none;
          background: #ee0a3b;
          color: #fff;
        }
      }
    }
  }

</style>
