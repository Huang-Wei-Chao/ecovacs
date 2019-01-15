<template>
  <panel :class="$style.panel" title="分类列表">
    <section :class="$style.content">
      <div :class="$style.item" v-for="item in classify">
        <h3>
          <router-link to="default">{{item.title}}</router-link>
        </h3>
        <span v-for="info in item.text">
          <router-link to="default">{{info}}</router-link>
        </span>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "list",
    components: {
      Panel
    },
    props: {
      classify: Array,
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
      @include list;
      padding: 0 12px;
      .item {
        padding: 40px 26px;
        border-bottom: 1px solid #eee;
        h3 {
          padding: 6px 0;
          font-size: 26px;
          color: #F01;
        }
        span {
          padding-right: 10px;
          font-size: 24px;
          color: #9f9f9f;
        }

      }
    }
  }

</style>
