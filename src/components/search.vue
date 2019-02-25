<template>
  <div class="search">
      <div><input type="text" v-model="str"><button @click="find()">搜索</button></div>
    <div class="type">
      <span :style="type==1?'color:#0576DA;font-weight:bold':''" @click="type=1;find()">歌</span>
      <span :style="type==1004?'color:#0576DA;font-weight:bold':''" @click="type=1004;find()">MV</span>
      <span :style="type==1009?'color:#0576DA;font-weight:bold':''" @click="type=1009;find()">电台</span>
    </div>
    <div class="list">
      <ul v-if="type==1">
        <li v-for="item in list">
          <router-link :to="{name:'songPlay',params:{id:item.id}}">
            <span>{{item.name}}--{{item.artists[0].name}}</span>
          </router-link>
          <a :href="'http://music.163.com/song/media/outer/url?id='+item.id+'.mp3'">
            <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1143"><path d="M1022.90118 818.11117h-0.743201c-3.618113-28.748118-27.873058-51.043168-57.596129-51.043169-29.72407 0-53.979015 22.296049-57.591135 51.043169h-0.743202s0 87.503003-87.509995 87.503002H206.17752c-87.505 0-87.505-87.503003-87.505-87.503002h-0.728218c-3.634096-28.748118-27.89004-51.043168-57.607117-51.043169-29.72407 0-53.978016 22.296049-57.61411 51.043169H1.997854s0 1.952902 0.189796 5.40819c-0.015983 0.645307-0.189796 1.242665-0.189796 1.882977 0 4.404269 0.58637 8.663693 1.502386 12.775277 6.167375 51.422761 38.035142 184.111224 202.676281 184.111224h612.540997c154.405135 0 192.19554-125.528155 201.325732-179.722938a57.8099 57.8099 0 0 0 2.85793-17.163563c0-0.992933-0.248733-1.925931-0.291686-2.902881 0.216767-2.78301 0.291687-4.388286 0.291686-4.388286zM154.226327 491.987498L475.169564 811.721034a53.278767 53.278767 0 0 0 37.602607 15.517331 53.283762 53.283762 0 0 0 37.601607-15.517331l320.95922-319.722548c20.763695-20.685779 20.763695-54.227748 0-74.918521-20.769689-20.689775-54.43952-20.689775-75.204214 0L566.538414 645.767305V53.911088a52.77331 52.77331 0 0 0-15.61123-37.379846 53.192859 53.192859 0 0 0-37.576635-15.433421c-29.369451 0-53.178874 23.640605-53.178874 52.813267v593.06292L229.418554 417.079965c-13.350658-13.769209-33.125416-19.289279-51.713448-14.443485-18.594026 4.847792-33.111431 19.311255-37.977204 37.833359-4.866772 18.517109 0.677272 38.216947 14.498425 51.517659z" p-id="1144"></path></svg>
          </a>
          <a @click="addSong({id:item.id,name:item.name});open()" title="加入播放列表">
            <svg class="icon" style="cursor:pointer;font-size:25px;width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1458"><path d="M761.6 700.8h-51.2c-9.6 0-16-6.4-16-16s6.4-16 16-16h51.2v-51.2c0-9.6 6.4-16 16-16s16 6.4 16 16v51.2h51.2c9.6 0 16 6.4 16 16s-6.4 16-16 16h-51.2v51.2c0 9.6-6.4 16-16 16s-16-6.4-16-16v-51.2zM256 288c-9.6 0-16-6.4-16-16S246.4 256 256 256h512c9.6 0 16 6.4 16 16s-6.4 16-16 16H256z m0 160c-9.6 0-16-6.4-16-16s6.4-16 16-16h512c9.6 0 16 6.4 16 16s-6.4 16-16 16H256z m0 160c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16H256z m0 160c-9.6 0-16-6.4-16-16s6.4-16 16-16h352c9.6 0 16 6.4 16 16s-6.4 16-16 16H256z" p-id="1459"></path></svg>
          </a>
        </li>
      </ul>
      <ul v-else-if="type==1009" class="dt">
        <li v-for="item in list">
          <router-link :to="{name:'dtDetail',params:{id:item.id}}">
            <img :src="item.picUrl+'?param=225x225'" alt="">
          </router-link>
            <span>
              <span>名称：{{item.name}}</span><br>
              <span>标签：{{item.category}}</span><br>
              <span>描述：{{item.desc}}</span><br>
            </span>
        </li>
      </ul>
      <ul v-else>
        <li v-for="item in list">
          <router-link :to="{name:'mvPlay',params:{id:item.id}}">
            <span>{{item.name}}</span><span v-if="item.briefDesc">--{{item.briefDesc}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
export default {
  name: 'search',
  data () {
    return {
      url: 'http://ruidong.cloudno.de',
      type: 1,
      list: [],
      offset: 0,
      str: this.$route.params.keywords
    }
  },
  methods: {
    ...mapMutations(['addSong']),
    open () {
      this.$message({
        message: '添加成功',
        type: 'success'
      })
    },
    find: function () {
      let that = this
      that.list = null
      $.get(this.url + '/search?keywords=' + that.str + '&offset=' + this.offset + '&type=' + this.type, function (data) {
        if (data.result.songs) that.list = data.result.songs
        else if (data.result.djRadios) that.list = data.result.djRadios
        else that.list = data.result.mvs
        console.log(that.list)
      })
    }
  },
  mounted: function () {
    this.find()
  }
}
</script>

<style scoped>
.search{
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
}
  .search input{
    border: 1px solid #999999;
    width: 500px;
    height: 30px;
    border-radius: 5px;
  }
.search button{
  border: none;
  background: #009af3;
  color: #ffffff;
  padding: 8px 10px;
  margin-left: 20px;
  border-radius: 5px;
}
  .list li{
    text-align: left;
    height: 30px;
    width: 49%;
    padding-left: 100px;
    box-sizing: border-box;
    display: inline-block;
  }
.list li span:nth-child(2){
  font-size: 14px;
  color: #999999;
}
.list li:hover{
  background: #999999;
}
  .type span{
    cursor: pointer;
    margin-right: 10px;
  }
  .dt li{
    height: auto;
  }
.dt li:hover{
  background: none;
}
  .dt li>a{
    display: inline-block;
  }
.dt li>*{
  vertical-align: top;
}
.dt li>span{
  display: inline-block;
  width: 50%;
  padding-left: 10px;
}
.dt li>span span{
  line-height: 30px;
}
</style>
