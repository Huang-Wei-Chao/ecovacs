<template>
  <div :class="$style.wrapper" ref="wrapper" v-show="showList">
    <panel :class="$style.panel" title="评价列表">
      <section :class="$style.content">
        <div>
          <div @click="hideCommentList">
            <i class="iconfont icon-fanhui"></i>
          </div>
          <div :class="$style.text">
            <span>商品评论</span>
          </div>
          <router-link tag="div" to="/" :class="$style.right">
            <i class="iconfont icon-shouye"></i>
          </router-link>
        </div>
        <div>
          <tag></tag>
        </div>
        <div>
          <p @click="selectCommentList($event,'all')" :class="{[$style.active]:all}">全部</p>
          <p @click="selectCommentList($event,'img')" :class="{[$style.active]:hasImg}">有图</p>
          <p @click="selectCommentList($event,'again')" :class="{[$style.active]:hasCommentAgain}">追加</p>
        </div>
        <div>
          <ul>
            <li v-for="item in selectComment" :key="item.username">
              <div>
                <img :src="item.avatar?item.avatar:require('../../../common/images/avatar.png')"/>
                <span>{{item.username}}</span>
                <span></span>
              </div>
              <div>{{item.text?item.text:'默认好评！'}}</div>
              <div>
                <img v-for="img in item.img" :src="img"/>
              </div>
              <div>{{item.time | formatDate}}</div>
              <div v-show="item.reply">
                <p>机器人小科回复：{{item.reply}}</p>
              </div>
              <div v-show="item.commentAgainTime">
                <span>用户{{againTime(item.time,item.commentAgainTime)}}天后追评</span>
                <p>{{item.commentAgainText}}</p>
              </div>
              <div>
                <img v-for="img in item.commentAgainImg" :src="img"/>
              </div>
              <div v-show="item.replyAgain">
                <p>机器人小科回复：{{item.replyAgain}}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </panel>
  </div>
</template>

<script>
  import Panel from "../../abstract/panel"
  import tag from "./tag"
  import BScroll from 'better-scroll'
  import {formatDate} from "../../../common/js/date.js"

  export default {
    name: "commentlist",
    components: {
      Panel,
      tag
    },
    data() {
      return {
        showList: false,
        all: true,
        hasImg: false,
        hasCommentAgain: false,
        selectComment: []
      }
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
      againTime(time, commentAgainTime) {
        let usedTime = commentAgainTime - time
        let d = Math.floor(usedTime / (24 * 3600 * 1000));
        return d
      },
      selectCommentList(event, e) {
        if (!event._constructed) {
          return
        }
        if (e === 'all') {
          this.all = true
          this.hasImg = false
          this.hasCommentAgain = false
          this.selectComment = this.comment
        } else if (e === 'img') {
          this.all = false
          this.hasImg = true
          this.hasCommentAgain = false
          this.selectComment = this.commentImg
        } else {
          this.all = false
          this.hasImg = false
          this.hasCommentAgain = true
          this.selectComment = this.commentAgain
        }
      },
      hideCommentList() {
        this.showList = false
      },
      showCommentList() {
        this.bus.$on('list', this.show);
      },
      show() {
        this.showList = true;
        this.all = true;
        this.hasImg = false;
        this.hasCommentAgain = false;
        this.selectComment = this.comment;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrapper, {
              click: true
            });
          } else {
            this.scroll.refresh()
          }
        })
      }
    },
    computed: {
      commentAgain() {
        return this.comment.filter((comments) => {
          return comments.commentAgainTime
        })
      },
      commentImg() {
        return this.comment.filter((comments) => {
          return comments.img.length > 0
        })
      }
    },
    mounted() {
      this.showCommentList()
    },
  }
</script>

<style lang="scss" module>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 120px;
    width: 100%;
    z-index: 30;
    background: #fff;
    .panel {
      @include panel;
      > h4 {
        display: none;
      }
      color: #4a4a4a;
      .content {
        > div {
          &:nth-child(1) {
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
          &:nth-child(2) {
            padding: 24px;
            border-bottom: 1px solid #ccc;
          }
          &:nth-child(3) {
            @include flex(row);
            p {
              width: 33.333%;
              line-height: 72px;
              font-size: 26px;
              text-align: center;
            }
            .active {
              border-bottom: 6px solid #ee0a3b;
              color: #ee0a3b;
            }

          }
          &:nth-child(4) {
            padding-top: 12px;
            li {
              padding-bottom: 20px;
              border-bottom: 2px solid #ccc;
              div {
                padding: 0 36px;
                font-size: 26px;
                &:nth-child(1) {
                  line-height: 112px;
                  img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    vertical-align: middle;
                    margin-right: 10px;
                  }
                }
                &:nth-child(2) {
                  margin: 12px 0;
                  line-height: 40px;
                }
                &:nth-child(3) {
                  margin: 12px 0;
                  img {
                    width: 100px;
                    height: 100px;
                    margin-right: 20px;
                  }
                }
                &:nth-child(4) {
                  margin: 12px 0;
                  line-height: 40px;
                }
                &:nth-child(5) {
                  margin: 12px 0;
                  p {
                    padding: 24px 12px;
                    line-height: 40px;
                    background: #f8f8f8;
                  }
                }
                &:nth-child(6) {
                  line-height: 40px;
                  span {
                    display: block;
                    margin-bottom: 12px;
                    color: #ee0a3b;
                  }
                }
                &:nth-child(7) {
                  margin: 12px 0;
                  img {
                    width: 100px;
                    height: 100px;
                    margin-right: 20px;
                  }
                }
                &:nth-child(8) {
                  margin: 12px 0;
                  p {
                    padding: 24px 12px;
                    line-height: 40px;
                    background: #f8f8f8;
                  }
                }
              }
            }
          }
        }
      }
    }
  }


</style>


