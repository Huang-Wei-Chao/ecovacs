<template>
  <panel :class="$style.panel" title="工具栏">
    <section :class="$style.content">
      <router-link :class="$style.kefu" to="/kefu" tag="div">
        <i></i>
        <p>联系客服</p>
      </router-link>
      <div :class="$style.collection">
        <i class="iconfont icon-xingxing"></i>
        <p>收藏</p>
      </div>
      <router-link :class="$style.cart" to="/cart" tag="div">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
      </router-link>
      <div :class="$style.add" @click="handleAddCart(detail)">
        <span>加入购物车</span>
        <transition name="fade">
          <div v-show="showMessage">
            <p>加入成功</p>
          </div>
        </transition>
      </div>
      <div :class="$style.buy">
        <span>立即购买</span>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"
  import Vue from 'vue'
  import {mapMutations} from 'vuex'

  export default {
    name: "footor",
    components: {
      Panel
    },
    props: {
      detail: Object,
    },
    data() {
      return {
        showMessage: false
      }
    },
    methods: {
      handleAddCart(detail) {
        if (!detail.count) {
          Vue.set(detail, 'count', 1)
        }
        this.showMessage = true
        setTimeout(this.hideWeChat, 2000);
        this.addCart(detail)
      },
      hideWeChat() {
        this.showMessage = false
      },
      ...mapMutations(['addCart'])
    }
  }
</script>

<style type="text/css" lang="scss">
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
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    > h4 {
      display: none;
    }
    .content {
      @include flex(row);
      height: 100px;
      padding: 10px 0 10px 20px;
      > div {
        font-size: 24px;
        color: #888;
        text-align: center;
        i {
          font-size: 65px;
          color: #ccc;
        }
        &:nth-child(-n+3) {
          margin: auto;
          @include flex;
          justify-content: space-between;
        }
        &:nth-child(1) {
          i {
            display: block;
            width: 96px;
            height: 65px;
            background: url("//static.ecovacs.cn/m/images/icon_kefu.png") top center no-repeat;
            background-size: 60%;
          }
        }
        &:nth-child(n+4) {
          position: relative;
          padding: 0 20px;
          line-height: 100px;
          font-size: 28px;
          color: #fff;
          background: #ff7301;
          div {
            position: absolute;
            top: -250px;
            right: 60px;
            z-index: 30;
            width: 210px;
            height: 100px;
            border: 2px solid #ccc;
            border-radius: 8px;
            background: rgba(51, 51, 51, 0.8);
          }
        }
        &:nth-child(5) {
          background: #ee0a3b;
        }
      }
    }
  }

</style>
