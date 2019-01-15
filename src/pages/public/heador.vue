<template>
  <div :class="$style.header">
    <div @click="returnPage">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div :class="$style.text">
      <span>{{title}}</span>
    </div>
    <div :class="$style.right">
      <router-link to="/">
        <i class="iconfont icon-shouye"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "heador",
    props: {
      title: {
        type: String,
        default: '全部分类'
      }
    },
    methods: {
      returnPage() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" module>

  .header {
    @include flex(row);
    padding: 0 40px;
    height: 90px;
    line-height: 90px;
    background: #f3f3f3;
    i {
      font-size: 30px;
    }
    .text {
      flex: 1;
      text-align: center;
      font-size: 26px;
    }
    .right {
      float: right;
    }
  }

</style>
