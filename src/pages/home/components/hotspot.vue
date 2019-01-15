<template>
  <panel :class="$style.panel" title="热点">
    <section :class="$style.content">
      <div :class="$style.hot">
        <i class="iconfont icon-E">热点</i>
      </div>
      <swiper :options="swiperOption" v-if="showHotSpot">
        <swiper-slide v-for="item in items" :key="item.text">
          <router-link to="/default" tag="p">{{item.text}}</router-link>
        </swiper-slide>
      </swiper>
    </section>
  </panel>
</template>


<script>
  import Panel from "../../abstract/panel"
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "hotspot",
    components: {
      Panel,
      swiper,
      swiperSlide
    },
    props: {
      items: Array
    },
    computed: {
      showHotSpot() {
        return this.items.length
      }
    },
    data() {
      return {
        swiperOption: {
          autoplay: true,
          loop: true,
          direction: 'vertical',
        }
      }
    }
  }
</script>

<style lang="scss">

  .swiper-container-vertical {
    padding: 0 26px;
    font-size: 24px;
    p {
      @include ellipsis;
    }
  }

</style>

<style lang="scss" module>

  .panel {
    @include panel;
    margin-top: 6px;
    > h4 {
      display: none;
    }
    .content {
      height: 90px;
      line-height: 90px;
      overflow: hidden;
      padding: 0 26px;
      .hot {
        float: left;
        font-size: 26px;
        color: #ee0a3b;
        i {
          font-size: 26px;
          padding-right: 26px;
          border-right: 1px solid #ccc;
        }
      }
    }
  }
</style>
