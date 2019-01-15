<template>
  <panel :class="$style.panel" title="热门商品">
    <section :class="$style.content">
      <div :class="$style.list" v-for="item in list">
        <div :class="$style.item">
          <router-link
            tag="img"
            :to="{name:'detail',params:{id:item.id}}"
            :src="item.cartIcon"
          />
          <p>{{item.info}}</p>
          <em>￥{{item.price}}</em>
          <div>
            <p @click="handleAddCart(item)">加入购物车</p>
          </div>
        </div>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"
  import {mapMutations} from 'vuex'
  import Vue from 'vue'

  export default {
    name: "recommend",
    components: {
      Panel,
    },
    props: {
      list: Array
    },
    methods: {
      handleAddCart(detail) {
        if (!detail.count) {
          Vue.set(detail, 'count', 1)
        }
        this.addCart(detail)
      },
      ...mapMutations(['addCart'])
    }
  }
</script>

<style lang="scss" module>
  
  .panel {
    @include panel;
    > h4 {
      background: #fff;
      margin-bottom: 24px;
      border-bottom: 1px solid #ccc;
    }
    margin-bottom: 200px;
    .content {
      @include flex(row);
      .list {
        width: 50%;
        height: 552px;
        box-sizing: border-box;
        .item {
          margin: 12px;
          padding: 12px;
          text-align: center;
          border: 1px solid #ccc;
          img {
            width: 268px;
            height: 268px;
          }
          p {
            height: 48px;
            line-height: 48px;
            font-size: 28px;
            color: #666;
          }
          em {
            font-size: 28px;
            color: #ee0a3b;
          }
          div {
            margin-top: 24px;
            padding: 24px 0;
            border-top: 1px solid #ccc;
            text-align: center;
            p {
              padding: 12px;
              margin: 0 48px;
              font-size: 28px;
              color: #fff;
              background: #ee0a3b;
            }
          }
        }
      }
    }
  }

</style>
