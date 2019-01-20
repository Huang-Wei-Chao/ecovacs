<template>
  <panel :class="$style.panel" title="结算">
    <section :class="$style.content">
      <i
        class="iconfont"
        :class="[totalChecked ?'icon-checked checkbox':'icon-check']"
        @click="handleSelectAllChecked(totalChecked)"
      >
        <span>全选</span>
      </i>
      <p>合计: ￥{{this.totalPrice}}</p>
      <em :class="payClass" @click="handlePay(totalPrice)">去结算</em>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"
  import {mapState, mapMutations, mapGetters} from 'vuex'

  export default {
    name: "settlement",
    components: {
      Panel,
    },
    methods: {
      handleSelectAllChecked(totalChecked) {
        this.selectAllChecked(totalChecked)
      },
      handlePay(totalPrice) {
        let checkedList = this.product.filter(item => item.checked === true)
        if (checkedList.length) {
          this.pay(totalPrice)
        }
      },
      ...mapMutations(['selectAllChecked', 'pay'])
    },
    computed: {
      payClass() {
        let checkedList = this.product.filter(item => item.checked === true)
        if (checkedList.length > 0) {
          return 'pay-class'
        }
      },
      totalChecked() {
        let checkedList = this.product.filter(item => item.checked === true)
        if (checkedList.length === this.product.length) {
          return true
        }
      },
      ...mapGetters(['totalPrice']),
      ...mapState(['product'])
      // ...mapState({totalChecked: 'totalChecked'}) 可为数组，可为对象
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  .checkbox {
    color: rgb(238, 10, 59)
  }

  .pay-class {
    background: rgb(238, 10, 59) !important;
  }

</style>

<style lang="scss" module>

  .panel {
    @include panel;
    > h4 {
      display: none;
    }
    position: fixed;
    bottom: 91px;
    left: 0;
    right: 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .content {
      @include flex(row);
      justify-content: flex-end;
      height: 110px;
      line-height: 110px;
      text-align: center;
      i {
        font-size: 28px;
        span {
          color: rgb(35, 56, 68);
          padding: 0 10px;
          font-size: 32px;
        }
      }
      p {
        width: 240px;
        padding-right: 30px;
        text-align: right;
        font-size: 32px;
        color: rgb(35, 56, 68);
      }
      em {
        width: 208px;
        font-size: 36px;
        color: #fff;
        background: #aaa;
      }
    }
  }

</style>
