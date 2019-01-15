<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.id">
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
    </swiper>
  </section>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "slider",
    components: {
      swiper,
      swiperSlide,
    },
    props: {
      cname: {
        type: String,
        default: '',
      },
      options: {
        type: Object,
        default() {
          return {
            autoplay: true,
            loop: true,
            observer:true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true, //修改swiper的父元素时，自动初始化swiper
            pagination: {
              el: '.swiper-pagination',
            },
            notNextTick: false,
          }
        }
      },
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }
</script>

<style lang="scss">


</style>
