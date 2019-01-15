<template>
  <panel :class="$style.panel" title="产品基础信息">
    <section :class="$style.content">
      <div :class="$style.title">
        <p>{{detail.name}}</p>
      </div>
      <div :class="$style.discount" v-show="detail.discount.length">
        <p v-for="item in detail.discount">{{item}}</p>
      </div>
      <div :class="$style.price">
        <span>会员价格:
          <span v-show="detail.oldPrice">￥{{detail.oldPrice}}</span>
          <em>￥{{detail.price}}</em>
        </span>
        <div>
          <span>购买数量：</span>
          <div>
            <i class="iconfont icon-jian" @click="decreaseCount"></i>
            <span>{{detail.count?detail.count:1}}</span>
            <i class="iconfont icon-jia" @click="addCount"></i>
          </div>
        </div>
      </div>
      <div :class="$style.sale">
        <span>销量： {{detail.sale}}件</span>
      </div>
      <div :class="$style.service">
        <i class="iconfont icon-xinyongka">
          <span>免息分期</span>
        </i>
        <i class="iconfont icon-zhengpin">
          <span>官方正品</span>
        </i>
        <i class="iconfont icon-quanguolianbao">
          <span>全国联保</span>
        </i>
        <i class="iconfont icon-baoyou">
          <span>全场满99包邮</span>
        </i>
        <i class="iconfont icon-qitian">
          <span>七天无理由退货</span>
        </i>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"
  import Vue from 'vue'

  export default {
    name: "information",
    components: {
      Panel
    },
    props: {
      detail: {
        type: Object,
        default() {
          return {
            name: '',
            discount: [],
            oldPrice: '',
            price: '',
            sale: '',
          }
        }
      }
    },
    methods: {
      addCount() {
        if (!this.detail.count) {
          Vue.set(this.detail, 'count', 1)
        }
        this.detail.count++;
      },
      decreaseCount() {
        if (this.detail.count > 1) {
          this.detail.count--
        }
      },
    },
    computed: {
      showDiscount() {
        return this.detail.length
      }
    }
  }
</script>

<style lang="scss" module>

  .panel {
    @include panel;
    > h4 {
      display: none;
    }
    border-top: 1px solid #ccc;
    .content {
      @include list;
      margin: 0 20px;
      > div {
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
        &:last-child {
          border-bottom: 0
        }
      }
      .title {
        border-bottom: 2px dashed #ccc;
        p {
          font-size: 32px;
          line-height: 48px;
          max-height: 100px;
        }
      }
      .discount {
        p {
          font-size: 28px;
          white-space: nowrap;
          line-height: 42px;
          color: #ee0a3b;
          a {
            padding-left: 10px;
            text-decoration: underline;
            color: #4C33E5;
          }
        }
      }
      .price {
        @include flex;
        > span {
          vertical-align: middle;
          padding-bottom: 20px;
          font-size: 28px;
          color: #666;
          span {
            font-weight: 700;
            text-decoration: line-through;
          }
          em {
            padding-left: 20px;
            font-size: 40px;
            font-weight: 700;
            vertical-align: middle;
            color: #ee0a3b;
          }
        }
        div {
          @include flex(row);
          justify-content: flex-start;
          height: 56px;
          span {
            line-height: 56px;
            font-size: 28px;
            color: #666;
          }
          div {
            box-sizing: border-box;
            border: 1px solid #ccc;
            i {
              width: 52px;
              font-size: 20px;
              text-align: center;
              line-height: 52px;
              &:first-child {
                border-right: 1px solid #ccc;
              }
              &:last-child {
                border-left: 1px solid #ccc;
              }
            }
            span {
              width: 52px;
              text-align: center;
            }
          }
        }
      }
      .sale {
        font-size: 28px;
        color: #666;
      }
      .service {
        @include flex(row);
        justify-content: space-between;
        color: #666;
        i {
          line-height: 50px;
          font-size: 26px;
          span {
            font-size: 24px;
          }
        }
      }
    }
  }
</style>
