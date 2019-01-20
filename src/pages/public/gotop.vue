<template>
  <panel :class="$style.panel" title="返回顶部">
    <section :class="$style.content" v-show="showGoTop" @click="goTop">
      <i class="iconfont icon-fanhuidingbu"></i>
    </section>
  </panel>
</template>

<script>
  import Panel from "../abstract/panel"

  export default {
    name: "gotop",
    components: {Panel},
    data() {
      return {
        scrollTop: '',
        showGoTop: false
      }
    },
    methods: {
      showGoTopIcon() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.showGoTop = this.scrollTop > 600;
      },
      goTop() {
        let timer = null, _that = this;
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 50;
            document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer);
            _that.goTopShow = false;
          }
        })
      }
    },
    mounted() {
      window.addEventListener('scroll', this.showGoTopIcon);
    },
    destroyed() {
      window.removeEventListener('scroll', this.showGoTopIcon)
    },
  }
</script>

<style lang="scss" module>
  .panel {
    @include panel;
    > h4 {
      display: none;
    }
    .content {
      position: fixed;
      bottom: 120px;
      right: 10px;
      i {
        font-size: 70px;
        color: rgba(160, 160, 160, 0.5);
      }

    }
  }

</style>
