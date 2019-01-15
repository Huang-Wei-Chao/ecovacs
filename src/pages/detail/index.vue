<template>
  <div>
    <heador :title="title"></heador>
    <dslider :dslider="dslider"></dslider>
    <information :detail="detail"></information>
    <comment :comment="comment"></comment>
    <commentlist :comment="comment"></commentlist>
    <gotop></gotop>
    <footor :detail="detail"></footor>
  </div>
</template>

<script>
  import heador from '../public/heador'
  import dslider from './components/dslider'
  import information from './components/information'
  import comment from './components/comment'
  import commentlist from './components/commentlist'
  import gotop from '../public/gotop'
  import footor from './components/footor'
  import axios from 'axios'


  export default {
    name: "index",
    components: {
      heador,
      dslider,
      information,
      comment,
      commentlist,
      gotop,
      footor,
    },
    data() {
      return {
        title: '商品详情',
        dslider: [],
        comment: [],
        detail: {}
      }
    },
    methods: {
      getDetailData() {
        this.$nextTick(() => {
          let id = this.$route.params.id;
          axios.get('/api/detail.json', {
            params: {id}
          }).then(res => {
            let data = res.data.detail;
            if ((typeof id) === "string") {
              id = parseInt(id)
            }
            let detail = data.filter(item => item.id === id)[0]
            this.dslider = detail.img
            this.comment = detail.comment
            this.detail = detail
          })
        })
      }
    },
    mounted() {
      this.getDetailData();
    },
    watch: {
      '$route'() {
        if (this.$route.params.id) {
          this.getDetailData();
        }
      }
    },
  }
</script>

<style lang="scss" module>

</style>
