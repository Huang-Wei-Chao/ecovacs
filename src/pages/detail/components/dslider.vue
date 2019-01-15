<template>
  <panel :class="$style.panel" title="轮播图">
    <section :class="$style.content">
      <slider :cname="$style.slider" :items="dslider" v-if="showSlider"></slider>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"
  import Slider from "../../abstract/slider"

  export default {
    name: "dslider",
    components: {
      Slider,
      Panel,
    },
    props: {
      dslider: {
        type: Array,
        default() {
          return []
        }
      },
    },
    computed: {
      showSlider() {
        return this.dslider.length
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
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 100%!important;
    .content {
      padding: 10px;
      .slider {
        img {
          width: 100%;
        }
      }

    }
  }

</style>
