<template>
  <section :class="[panelClass,cname]">
    <h4>{{title}}</h4>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: "panel",
    props: {
      title: {
        type: String,
        default: ''
      },
      cname: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        panelClass: 'panel',
      }
    }
  }
</script>

<style lang="scss">

  .panel {
    @include panel;
  }
</style>
