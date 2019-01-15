<template>
  <panel :class="$style.panel" title="联系客服">
    <section :class="$style.content">
      <router-link to="default" tag="div">
        <p>联系客服</p>
      </router-link>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "kefu",
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
      @include flex();
      position: fixed;
      bottom: 150px;
      right: 20px;
      text-align: center;
      div {
        width: 72px;
        height: 102px;
        background: url("//static.ecovacs.cn/m/images/icon_kefu.png") top center no-repeat;
        background-size: 80%;
        /*动画效果*/
        position: relative;
        animation: shake 1s infinite;
        @keyframes shake {
          0% {
            top: 0;
          }
          50% {
            top: 5px;
          }
          100% {
            top: 0;
          }
        }
        /*动画效果*/
        p {
          padding-top: 60px;
          font-size: 18px;
          color: #D02090;
        }
      }
      i {
        font-size: 44px;
        color: #777;
      }
    }
  }
</style>
