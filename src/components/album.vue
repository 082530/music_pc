<template>
  <div class="album">
    <div v-if="list.length==0" class="box">
      <img src="../assets/loading.gif" alt="">
    </div>
    <div class="info">
      <div>
        <img :src="img+'?param=225x225'" alt="">
      </div>
      <div>
        <h2>专辑：{{alb}}</h2>
        <p>歌&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;手:&nbsp;&nbsp;{{author}}</p>
        <p>发行时间:&nbsp;&nbsp;{{pushlistTime}}</p>
      </div>
    </div>
    <div class="description" :style="{height:h}">
      <h3>专辑介绍：</h3>
      <p>{{description}}</p>
      <span @click="h='';show=0" v-show="show"></span>
      <span @click="h='112px';show=1" v-show="!show"></span>
    </div>
    <div class="song">

      <table>
        <thead>
        <tr>
          <th>序号</th>
          <th>歌名</th>
          <th>时长</th>
          <th>歌手</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,key) in list">
          <td>{{key+1}}</td>
          <td>
            {{item.name}}
            <span class="alia" v-if="item.alia.length!=0">-({{item.alia}})</span><router-link :to="{name: 'mvPlay',params: {id:item.mv}}" class="mv" v-if="item.mv!=0"></router-link>
            <a title="下载" :href="'http://music.163.com/song/media/outer/url?id='+item.id+'.mp3'">
              <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1143"><path d="M1022.90118 818.11117h-0.743201c-3.618113-28.748118-27.873058-51.043168-57.596129-51.043169-29.72407 0-53.979015 22.296049-57.591135 51.043169h-0.743202s0 87.503003-87.509995 87.503002H206.17752c-87.505 0-87.505-87.503003-87.505-87.503002h-0.728218c-3.634096-28.748118-27.89004-51.043168-57.607117-51.043169-29.72407 0-53.978016 22.296049-57.61411 51.043169H1.997854s0 1.952902 0.189796 5.40819c-0.015983 0.645307-0.189796 1.242665-0.189796 1.882977 0 4.404269 0.58637 8.663693 1.502386 12.775277 6.167375 51.422761 38.035142 184.111224 202.676281 184.111224h612.540997c154.405135 0 192.19554-125.528155 201.325732-179.722938a57.8099 57.8099 0 0 0 2.85793-17.163563c0-0.992933-0.248733-1.925931-0.291686-2.902881 0.216767-2.78301 0.291687-4.388286 0.291686-4.388286zM154.226327 491.987498L475.169564 811.721034a53.278767 53.278767 0 0 0 37.602607 15.517331 53.283762 53.283762 0 0 0 37.601607-15.517331l320.95922-319.722548c20.763695-20.685779 20.763695-54.227748 0-74.918521-20.769689-20.689775-54.43952-20.689775-75.204214 0L566.538414 645.767305V53.911088a52.77331 52.77331 0 0 0-15.61123-37.379846 53.192859 53.192859 0 0 0-37.576635-15.433421c-29.369451 0-53.178874 23.640605-53.178874 52.813267v593.06292L229.418554 417.079965c-13.350658-13.769209-33.125416-19.289279-51.713448-14.443485-18.594026 4.847792-33.111431 19.311255-37.977204 37.833359-4.866772 18.517109 0.677272 38.216947 14.498425 51.517659z" p-id="1144"></path></svg>
            </a>
            <a @click="addSong({id:item.id,name:item.name});open()" title="加入播放列表">
              <svg class="icon" style="cursor:pointer;font-size:25px;width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1458"><path d="M761.6 700.8h-51.2c-9.6 0-16-6.4-16-16s6.4-16 16-16h51.2v-51.2c0-9.6 6.4-16 16-16s16 6.4 16 16v51.2h51.2c9.6 0 16 6.4 16 16s-6.4 16-16 16h-51.2v51.2c0 9.6-6.4 16-16 16s-16-6.4-16-16v-51.2zM256 288c-9.6 0-16-6.4-16-16S246.4 256 256 256h512c9.6 0 16 6.4 16 16s-6.4 16-16 16H256z m0 160c-9.6 0-16-6.4-16-16s6.4-16 16-16h512c9.6 0 16 6.4 16 16s-6.4 16-16 16H256z m0 160c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16H256z m0 160c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16H256z" p-id="1459"></path></svg>
            </a>
          </td>
          <td>{{item.dt | time}}</td>
          <td>{{item.ar[0].name}}</td>
          <td><router-link title="播放" :to="{name:'songPlay',params:{id:item.id}}">▶</router-link></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'album',
  data () {
    return {
      url: 'http://ruidong.cloudno.de',
      id: this.$route.params.id,
      list: '',
      author: '',
      alb: '',
      publishTime: '',
      description: '',
      img: '',
      h: '112px',
      show: 1
    }
  },
  methods: {
    ...mapMutations(['addSong']),
    open () {
      this.$message({
        message: '添加成功',
        type: 'success'
      })
    }
  },
  filters: {
    time: function (value) {
      let time = parseInt(value / 1000)
      let m = parseInt(time / 60)
      let s = time % 60
      m < 10 ? m = '0' + m : m = m
      s < 10 ? s = '0' + s : s = s
      return m + ':' + s
    }
  },
  mounted: function () {
    let that = this
    $.get(that.url + '/album?id=' + that.id,
      function (data) {
        that.list = data.songs
        that.author = data.album.artist.name
        that.alb = data.album.name
        that.pushlistTime = new Date(data.album.publishTime).toLocaleDateString()
        that.description = data.album.description
        that.img = data.album.picUrl
      }
    )
  }
}
</script>

<style scoped>
  @import "../assets/album.css";
  .mv{
    display: inline-block;
    width: 23px;
    height: 17px;
    background: url("../assets/table.png") no-repeat 0 -151px;
  }
</style>
