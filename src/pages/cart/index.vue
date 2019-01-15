<template>
  <div>
    <heador :title="title"></heador>
    <emptycart v-show="!cartList"></emptycart>
    <recommend v-show="!cartList" :list="list"></recommend>
    <cartlist v-show="cartList"></cartlist>
    <settlement v-show="cartList"></settlement>
    <navbar></navbar>
  </div>
</template>

<script>
  import heador from '../public/heador'
  import emptycart from './components/emptycart'
  import recommend from './components/recommend'
  import cartlist from './components/cartlist'
  import settlement from './components/settlement'
  import navbar from '../public/navbar'
  import {mapState} from 'vuex'
  import axios from 'axios'

  export default {
    name: "index",
    components: {
      heador,
      emptycart,
      recommend,
      cartlist,
      settlement,
      navbar
    },
    data() {
      return {
        title: '购物车',
        list: [],
        recom: [
          {id: 2346},
          {id: 2658},
          {id: 2094},
        ]
      }
    },
    methods: {
      getRecommend() {
        axios.get('api/detail.json').then(res => {
          let data = res.data.detail
          this.recom.forEach(recom => {
            data.forEach(data => {
              if (data.id === recom.id) {
                this.list.push(data)
              }
            })
          })
        })
        return this.list
      }
    },
    computed: {
      cartList() {
        return this.product.length
      },
      ...mapState(['showDialog', 'product'])
    },
    mounted() {
      this.getRecommend()
    }
  }
</script>

<style lang="scss" module>

</style>
