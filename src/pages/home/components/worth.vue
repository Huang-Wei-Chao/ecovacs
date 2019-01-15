<template>
  <panel :class="$style.panel" title="今日值得买">
    <section :class="$style.content">
      <div :class="$style.item" v-for="item in items">
        <div @click="goToDetail(item.id)">
          <h4>今日值得买 <em><span>{{hours}}</span>:<span>{{minutes}}</span>:<span>{{seconds}}</span></em></h4>
          <div v-if="show">
            <img :src="item.icon"/>
            <p>{{item.classify}}<em>￥{{item.price}}</em></p>
          </div>
          <div v-else>
            <div :class="$style.finish">
              <p>敬请期待<br/>下次活动</p>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.item" v-for="item in items">
        <ul>
          <li v-for="list in item.list" :key="list.id">
            <router-link :to="{name:'detail',params:{id:list.id}}">
              <img :src="list.icon"/>
              <h4>{{list.classify}}</h4>
              <p>{{list.info}}</p>
              <em>￥{{list.price}}</em>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from "../../abstract/panel"

  export default {
    name: "worth",
    components: {
      Panel
    },
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }

    },
    data() {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        show: true,
      }
    },
    methods: {
      goToDetail(id) {
        if (this.show) {
          this.$router.push({name: "detail", params: {id}});
        } else {
          this.$router.push('/');
        }
      },
      time() {
        let difference = this.items[0].endDate - Date.parse(new Date());
        if (difference > 0) {
          let h = Math.floor(difference / (1000 * 60 * 60));
          let m = Math.floor((difference / 1000 / 60) % 60);
          let s = Math.floor((difference / 1000) % 60);
          this.hours = h < 10 ? "0" + h : h;
          this.minutes = m < 10 ? "0" + m : m;
          this.seconds = s < 10 ? "0" + s : s;
        } else {
          this.hours = '00'
          this.minutes = '00'
          this.seconds = '00'
          this.show = false
        }
      },
      countdown() {
        let difference = this.items[0].endDate - Date.parse(new Date());
        let time = setInterval(() => {
          this.time()
          if (difference < 0) {
            clearInterval(time)
          }
        }, 1000)
        // console.log(Date.parse("2019-1-19 13:01:00"))
      },
    },
    mounted() {
      this.time()
      this.countdown()
    }
  }
</script>

<style lang="scss" module>

  .panel {
    @include panel;
    margin: 26px 0;
    > h4 {
      display: none;
    }
    .content {
      @include list(row);
      .item {
        width: 50%;
        box-sizing: border-box;
        font-size: 24px;
        h4 {
          height: 46px;
          line-height: 46px;
        }
        em {
          color: #ee0a3b;
          span {
            margin: 0 4px;
            padding: 8px 4px;
            border-radius: 10px;
            background: #ee0a3b;
            color: #fff;
          }
        }
        &:first-child {
          .finish {
            margin: 40px auto 0;
            height: 164px;
            width: 164px;
            border: 1px solid #e4e7e9;
            border-radius: 50%;
            p {
              margin: 43px 0;
              line-height: 40px;
              font-size: 24px;
              color: #bdc3c7;
            }
          }
        }
        &:first-child {
          padding: 26px 26px;
          text-align: center;
          border-right: 1px solid #ccc;
          img {
            width: 160px;
            height: 160px;
            margin: 20px 0;
          }
        }
        ul {
          width: 100%;
          li {
            height: 163px;
            width: 100%;
            padding: 26px 14px;
            box-sizing: border-box;
            img {
              float: right;
              padding-right: 20px;
              width: 106px;
              height: 106px;
            }
            p {
              color: rgb(153, 153, 153);
              padding-bottom: 10px;
            }
            &:first-child {
              border-bottom: 1px solid #ccc;
            }
          }
        }
      }
    }
  }
</style>
