<template>
  <div :class="$style.header">
    <div :class="$style.left">
      <i class="iconfont icon-E"></i>
      科沃斯机器人
    </div>
    <router-link to="/default" tag="div" :class="$style.search">
      双十二钜惠
      <i class="iconfont icon-sousuo"></i>
    </router-link>
    <router-link to="/default" tag="div" :class="$style.right"></router-link>
  </div>
</template>

<script>
  export default {
    name: "heador"
  }
</script>

<style lang="scss" module>
  .header {
    display: flex;
    height: 76px;
    margin: 0 20px;
    background: #f3f3f3;
    font-size: 24px;
    i {
      font-size: 24px;
    }
    .left {
      line-height: 76px;
      height: 76px;
    }
    .search {
      flex: 1;
      margin: 10px 6px;
      padding: 0 20px;
      line-height: 56px;
      border-radius: 10px;
      color: #666;
      background: #fff;
      i {
        float: right;
      }
    }
    .right {
      float: right;
      width: 62px;
      background: url("https://static.ecovacs.cn/m/images/icon_kefu.png") right center no-repeat;
      background-size: 80%;
    }
  }
</style>
