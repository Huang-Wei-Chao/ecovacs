<template>
  <panel :class="$style.panel" title="购物车列表">
    <section :class="$style.content">
      <div :class="$style.item" v-for="item in this.product">
        <i
          class="iconfont"
          :class="[item.checked ?'icon-checked checkbox':'icon-check']"
          @click="handleSelectChecked(item.id)"
        ></i>
        <img :src="item.icon"/>
        <div :class="$style.info">
          <router-link
            tag="p"
            :to="{name:'detail',params:{id:item.id}}"
          >
            {{item.name}}
          </router-link>
          <p>单价：￥{{item.price}}</p>
          <div :class="$style.counter">
            <div>
              <i class="iconfont icon-jian" @click="handleDecreaseCount(item.id)"></i>
              <span>{{item.count}}</span>
              <i class="iconfont icon-jia" @click="handleAddCount(item.id)"></i>
            </div>
            <i class="iconfont icon-shanchu" @click="handleDeleteProduct(item.id)"></i>
          </div>
        </div>
        <div :class="$style.gift" v-show="item.gift">
          <p>{{item.gift}}</p>
          <em>x{{item.giftNum}}</em>
        </div>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "cartlist",
    components: {
      Panel
    },
    methods: {
      handleAddCount(id) {
        this.addCount(id)
      },
      handleDecreaseCount(id) {
        this.decreaseCount(id)
      },
      handleDeleteProduct(id) {
        this.deleteProduct(id)
      },
      handleSelectChecked(id) {
        this.selectChecked(id)
      },
      ...mapMutations(['addCount', 'decreaseCount', 'deleteProduct', 'selectChecked'])
    },
    computed: {
      ...mapState(['product'])
    }
  }
</script>

<style lang="scss">
  .checkbox {
    color: rgb(238, 10, 59)
  }

</style>

<style lang="scss" module>

  .panel {
    @include panel;
    margin: 0 24px 202px;
    > h4 {
      display: none;
    }
    .content {
      .item {
        @include flex(row);
        justify-content: space-between;
        padding: 24px;
        border-bottom: 2px solid #ccc;
        &:last-child {
          border-bottom: 0;
        }
        > i {
          line-height: 192px;
          font-size: 28px;
        }
        img {
          width: 172px;
          height: 172px;
          padding-top: 20px;
        }
        .info {
          @include flex(row);
          width: 300px;
          p {
            &:nth-child(1) {
              line-height: 48px;
              font-size: 30px;
              color: #666;
            }
            &:nth-child(2) {
              line-height: 46px;
              margin: 12px 0;
              font-size: 28px;
              color: #ee0a3b;
            }
          }
          .counter {
            @include flex(row);
            justify-content: space-between;
            width: 100%;
            height: 62px;
            div {
              @include flex(row);
              height: 60px;
              width: 206px;
              border: 1px solid #ccc;
              i {
                width: 68px;
                line-height: 60px;
                font-size: 28px;
                text-align: center;
                background: #f4f4f4;
                color: #999;
              }
              span {
                width: 70px;
                height: 60px;
                border: 0;
                font-size: 28px;
                line-height: 60px;
                color: #424242;
                text-align: center;
              }
            }
            > i {
              line-height: 60px;
              font-size: 44px;
              color: #ccc;
            }
          }
        }
        .gift {
          @include flex(row);
          justify-content: space-between;
          height: 92px;
          width: 490px;
          margin-left: 40px;
          line-height: 92px;
          font-size: 28px;
          color: #666;
          em {
            color: #999;
          }
        }
      }
    }
  }
</style>
