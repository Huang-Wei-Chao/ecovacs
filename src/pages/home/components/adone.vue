<template>
  <panel :class="$style.panel" title="广告区1">
    <section :class="$style.content">
      <router-link :to="{name:'detail',params:{id:item.id}}" v-for="item in items" :key="item.id">
        <img :src="item.img"/>
      </router-link>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "adone",
    components: {
      Panel
    },
    props: {
      items: Array
    }
  }
</script>

<style lang="scss" module>

  .panel {
    > h4 {
      display: none;
    }
    @include panel;
    .content {
      img {
        width: 100%;
        margin: -5px 0;
      }
    }
  }

</style>
