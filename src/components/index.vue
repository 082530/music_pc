<template>
  <div class="hello container">
    <div class="banner">
        <ul>
          <li :class="key==ban?'active':''" v-for="(item,key) in banner">
            <router-link :to="{name:item.targetType==1?'songPlay':item.targetType==10?'album':item.targetType==1004?'mvPlay':item.targetType==1000?'gedan':'',params:{id:item.encodeId}}">
              <img :src="item.imageUrl+'?param=1200x400'" alt="">
            </router-link>
          </li>
        </ul>
      <p class="cont">
        <span @mouseenter="ban = key;me()" @mouseleave="ban1()" :class="key==ban?'active':''" v-for="(item,key) in banner"></span>
      </p>
    </div>
    <div class="new_n">
      <h2 :class="new_n==0?'active':''" @click="new_song(0)">新歌首发</h2>
      <h2 :class="new_n==1?'active':''" @click="new_song(1)">最新MV</h2>
      <router-link :to="{name: 'newList',params: {type:new_n,page:0}}" style="float: right;font-size: 14px;margin-right: 20px">查看更多>></router-link>
    </div>
    <div>
      <div v-if="new_n==0" class="song">
        <h2 style="text-align: center;margin-top: 50px;color: #158fe1" v-if="song_list.length==0">正在加载中，请稍后。。。</h2>
        <ul>
          <li v-for="item in song_list">
            <router-link :to="{name:'album',params:{id:item.id}}">
              <img :src="item.blurPicUrl+'?param=200x200'" alt="">
              <p>{{item.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div v-if="new_n==1" class="mv">
        <ul>
          <li v-for="item in mv_list">
            <router-link :to="{name:'mvPlay',params:{id:item.id}}">
              <img :src="item.cover+'?param=200x200'" alt="">
              <p>{{item.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      new_n: 0,
      url: 'http://ruidong.cloudno.de',
      song_list: [],
      mv_list: [],
      banner: '',
      ban: 0,
      cc: ''
    }
  },
  methods: {
    new_song: function (i) {
      this.new_n = i
    },
    ban1: function () {
      this.cc = setInterval(() => {
        this.ban++
        if (this.ban >= this.banner.length) this.ban = 0
      }, 4000)
    },
    me () {
      clearInterval(this.cc)
    }
  },
  mounted: function () {
    let that = this
    $.get(that.url + '/top/album?offset=0&limit=10',
      function (data) {
        //console.log(data)
        that.song_list = data.albums
      }
    )
    $.get(that.url + '/mv/first?limit=10',
      function (data) {
       // console.log(data)
        that.mv_list = data.data
      }
    )
    $.get(that.url + '/banner',
      function (data) {
        // console.log(data)
        that.banner = data.banners
        that.ban1()
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/index.css";
  .new_n>*{
    cursor: pointer;
  }
</style>
