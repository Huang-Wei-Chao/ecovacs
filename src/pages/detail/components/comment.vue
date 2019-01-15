<template>
  <panel :class="$style.panel" title="评论">
    <section :class="$style.content">
      <div>
        <span>总评：</span>
        <em>4402人<span>已评</span></em>
      </div>
      <div>
        <tag></tag>
      </div>
      <div v-for="(item,index) in comment" :key="item.index" v-if="index<1">
        <div>
          <img :src="item.avatar?item.avatar:require('../../../common/images/avatar.png')"/>
          <em>{{item.name}}</em>
          <span>{{item.time | formatDate}}</span>
        </div>
        <div>
          <span>评价：</span>
          <span></span>
        </div>
        <div>
          {{item.text}}
        </div>
      </div>
      <div @click="showCommentList">查看更多评价</div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"
  import tag from "./tag"
  import commentlist from "./commentlist"
  import {formatDate} from "../../../common/js/date";


  export default {
    name: "comment",
    components: {
      Panel,
      tag,
      commentlist
    },
    props: {
      comment: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd')
      },
    },
    methods: {
      showCommentList() {
        this.bus.$emit('list')
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
    margin-top: 20px;
    margin-bottom: 36px;
    .content {
      padding: 0 20px;
      font-size: 26px;
      color: #9f9f9f;
      > div {
        border-bottom: 1px solid #ccc;
        padding: 20px 0;
        &:nth-child(1) {
          em {
            float: right;
            text-align: right;
            color: #ee0a3b;
          }
          span {
            color: #9f9f9f;
          }
        }
        &:nth-child(3) {
          div {
            padding-bottom: 20px;
            &:first-child {
              line-height: 80px;
              img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                vertical-align: middle;
              }
              span {
                float: right;
              }
            }
            &:last-child {
              padding-bottom: 0;
              line-height: 40px;
            }
          }
        }
        &:nth-child(4) {
          line-height: 60px;
          text-align: center;
          border: 0;
        }
      }
    }
  }

</style>
