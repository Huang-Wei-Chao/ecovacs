<template>
  <panel :class="$style.panel" title="明星产品">
    <section :class="$style.content">
      <router-link :to="{name:'detail',params:{id:item.id}}"
                   tag="div"
                   :class="$style.item"
                   v-for="item in items"
                   :key="item.name"
      >
        <img :src="item.icon"/>
        <p>{{item.classify}}</p>
        <p>{{item.info}}</p>
        <p>¥{{item.price}}</p>
      </router-link>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "product",
    components: {
      Panel,
    },
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" module>

  .panel {
    @include panel;
    .content {
      @include list(row);
      .item {
        width: 50%;
        text-align: center;
        box-sizing: border-box;
        padding-bottom: 20px;
        border-bottom: 10px solid #f3f3f3;;
        &:nth-child(2n+1) {
          border-right: 8px solid #f3f3f3;
        }
        img {
          width: 100%;
          margin-bottom: 20px;
        }
        p {
          font-size: 24px;
          line-height: 36px;
          &:nth-child(3) {
            color: #999;
          }
          &:nth-child(4) {
            color: #ee0a3b;
          }
        }
      }
    }
  }

</style>
