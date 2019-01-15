<template>
  <div>
    <heador></heador>
    <hslider :items="slider"></hslider>
    <hicon :items="hicon"></hicon>
    <hotspot :items="hotspot"></hotspot>
    <worth :items="worth" v-if="worth.length"></worth>
    <adone :items="adOne"></adone>
    <product :items="product"></product>
    <parts :items="parts"></parts>
    <adtwo :items="adTwo"></adtwo>
    <guess :items="guess"></guess>
    <footor></footor>
    <gotop></gotop>
    <navbar></navbar>
  </div>
</template>

<script>
  import heador from './components/heador'
  import hslider from './components/hslider'
  import hicon from './components/hicon'
  import hotspot from './components/hotspot'
  import worth from './components/worth'
  import adone from './components/adone'
  import product from './components/product'
  import parts from './components/parts'
  import adtwo from './components/adtwo'
  import guess from './components/guess'
  import footor from './components/footor'
  import gotop from '../public/gotop'
  import navbar from '../public/navbar'
  import axios from 'axios'

  export default {
    name: "index",
    components: {
      heador,
      hslider,
      hicon,
      hotspot,
      worth,
      adone,
      product,
      parts,
      adtwo,
      guess,
      footor,
      gotop,
      navbar
    },
    data() {
      return {
        slider: [],
        hicon: [],
        hotspot: [],
        adOne: [],
        adTwo: [],
        worth: [],
        parts: [],
        product: [],
        guess: []
      }
    },
    methods: {
      getProductData() {
        axios.get('/api/home.json').then(res => {
          const data = res.data.data
          this.slider = data.hslider
          this.hicon = data.hicon
          this.hotspot = data.hotspot
          this.adOne = data.adOne
          this.adTwo = data.adTwo
          this.worth = data.worth
          this.parts = data.parts
          this.product = data.product
          this.guess = data.guess
        })
      }
    },
    mounted() {
      this.getProductData()
    }
  }
</script>

<style lang="scss">

</style>
