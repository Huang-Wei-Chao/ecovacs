<template>
  <panel :class="$style.panel" title="微博微信">
    <section :class="$style.content">
      <a href="https://weibo.com/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibo"></use>
        </svg>
      </a>
      <a>
        <svg class="icon" aria-hidden="true" @click="clickShowWeChat">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <transition name="fade">
          <div :class="$style.weChat" v-show="showWeChat">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
              <div>
                <p>科沃斯</p>
                <p>微信号：kewosi</p>
              </div>
            </div>
          </div>
        </transition>
      </a>
      <p>Copyright©2018 科沃斯机器人</p>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "footor",
    components: {
      Panel
    },
    data() {
      return {
        showWeChat: false
      }
    },
    methods: {
      clickShowWeChat() {
        this.showWeChat = true
        setTimeout(this.hideWeChat, 5000);
      },
      hideWeChat() {
        this.showWeChat = false
      }
    }
  }
</script>

<style type="text/css" lang="scss">
  .icon {
    width: 60px;
    height: 60px;
    fill: currentColor;
    overflow: hidden;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
</style>

<style lang="scss" module>

  .panel {
    @include panel;
    > h4 {
      display: none;
    }
    margin-bottom: 92px;
    .content {
      position: relative;
      padding: 50px 0 35px;
      text-align: center;
      a {
        > svg {
          margin: 0 35px 20px;
        }
      }
      .weChat {
        position: absolute;
        top: -150px;
        left: 210px;
        z-index: 30;
        width: 330px;
        height: 174px;
        border: 2px solid #ccc;
        border-radius: 8px;
        background: #fff;
        > div {
          padding: 50px 40px;
          div {
            float: right;
            p {
              line-height: 36px;
              text-align: left;
              font-size: 24px;
              color: #9f9f9f;
            }
          }
        }
      }
      > p {
        font-size: 24px;
        color: #a0a0a0;
      }
    }
  }


</style>
