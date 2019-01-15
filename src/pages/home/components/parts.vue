<template>
  <panel :class="$style.panel" title="配件专区">
    <section :class="$style.content">
      <router-link
        :to="{name:item.href}"
        tag="div"
        :class="$style.item"
        v-for="item in items"
        :key="item.name"
      >
        <img :src="item.src"/>
        <p>{{item.name}}</p>
      </router-link>
      <router-link tag="span" to="/default">更多></router-link>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "parts",
    components: {
      Panel
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
    background: #f3f3f3;
    .content {
      @include flex(row);
      justify-content: space-between;
      position: relative;
      font-size: 24px;
      .item {
        width: 206px;
        padding: 26px 0;
        margin-bottom: 10px;
        box-sizing: border-box;
        text-align: center;
        background: #fff;
        img {
          width: 100%;
          margin-bottom: 26px;
        }
      }
      span {
        position: absolute;
        top: -126px;
        right: 20px;
        height: 168px;
        line-height: 168px;
        color: #9f9f9f;
      }
    }

  }

</style>
