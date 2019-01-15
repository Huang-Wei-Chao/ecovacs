<template>
  <div>
    <heador></heador>
    <classify></classify>
    <list :classify="classify"></list>
    <footor></footor>
    <kefu></kefu>
    <navbar></navbar>
  </div>
</template>

<script>
  import heador from '../public/heador'
  import classify from './components/classify'
  import list from './components/list'
  import footor from './components/footor'
  import kefu from './components/kefu'
  import navbar from '../public/navbar'
  import axios from 'axios'

  export default {
    name: "index",
    components: {
      heador,
      classify,
      list,
      footor,
      kefu,
      navbar
    },
    data() {
      return {
        classify: []
      }
    },
    methods: {
      getClassifyData() {
        axios.get('/api/classify.json').then(res => {
          const data = res.data
          this.classify = data.classify
        })
      }
    },
    mounted() {
      this.getClassifyData()
    }
  }
</script>

<style lang="scss" module>

</style>
