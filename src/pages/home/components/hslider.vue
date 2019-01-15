<template>
  <panel :class="$style.panel" title="轮播图">
    <section :class="$style.content">
      <slider :cname="$style.slider" :items="items" v-if="showSlider"></slider>
    </section>
  </panel>
</template>

<script>
  import slider from "../../abstract/slider"
  import panel from "../../abstract/panel"

  export default {
    name: "hslider",
    components: {
      panel,
      slider
    },
    props: {
      items: Array,
    },
    computed: {
      showSlider() {
        return this.items.length
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
    .content {
      overflow: hidden;
      width: 100%;
      height: 0;
      padding-bottom: 50.667%;
      .slider {
        img {
          width: 100%;
          margin: -5px 0;
        }
      }
    }
  }
</style>
