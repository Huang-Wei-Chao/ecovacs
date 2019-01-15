<template>
  <panel :class="$style.panel" title="弹出框">
    <section :class="$style.content">
      <div :class="$style.mask"></div>
      <div :class="$style.item">
        <h3>提示框</h3>
        <p>确认要删除么？</p>
        <div :class="$style.btn">
          <div @click="handleConfirm">确定</div>
          <div @click="handleCancel">取消</div>
        </div>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../abstract/panel"

  export default {
    name: "dialog",
    components: {
      Panel
    },
    methods: {
      handleConfirm() {

      },
      handleCancel() {
      }
    }
  }
</script>

<style lang="scss" module>

  .panel {
    @include panel;
    > h4 {
      display: none;
    }
    .content {
      position: relative;
      .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1001;
        background: rgba(0, 0, 0, 0.5);
      }
      .item {
        position: fixed;
        box-sizing: border-box;
        padding: 20px;
        width: 80%;
        min-height: 140px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        background: #fff;
        z-index: 1002;
        h3 {
          font-size: 30px;
          font-weight: 600;
          line-height: 30px;
        }
        p {
          font-size: 26px;
          line-height: 35px;
          padding: 10px 0;
          color: #555;
        }
        .btn {
          display: flex;
          position: absolute;
          right: 0;
          bottom: 10px;
          div {
            padding: 10px 20px;
            font-size: 26px;
            &:first-child {
              color: #76D49B;
            }
          }
        }
      }
    }
  }

</style>
