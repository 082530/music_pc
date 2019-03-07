<template>
  <div class="mvplay">
    <div>
      <h2>{{m_name || data.title}}</h2>
      <div id="video" style="width: 700px; height: 400px;" ref="vid"></div>
      <div class="allList">
        <ul>
          <li v-for="item in allList">
            <router-link :to="{name:'mvPlay',params:{id:item.vid}}">
              <img :src="`${item.coverUrl}?param=160x160`" alt="">
              <p>{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="description">
        <p>简介：<br>{{description || data.description || '暂无简介'}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mvPlay',
  data () {
    return {
      url: 'http://ruidong.cloudno.de',
      id: this.$route.params.id,
      m_name: '',
      description: '',
      allList: '',
      data: ''
    }
  },
  methods: {
    videoData (id) { // 请求mv视频
      let src = []
      let that = this
      $.ajax({
        url: this.url + '/mv/detail?mvid=' + (id || this.id),
        type: 'GET',
        async: false,
        success: function (data) {
          // src = [
          //   [data.data.brs['240'], 'video/mp4', '240', 0],
          //   [data.data.brs['480'], 'video/mp4', '480', 0],
          //   [data.data.brs['720'], 'video/mp4', '720', 10],
          //   [data.data.brs['1080'], '', '1080', 0],
          // ];
          let i = 0
          for (let key in data.data.brs) {
            let arr = []
            arr.push(data.data.brs[key])
            arr.push('video/mp4')
            arr.push(key)
            arr.push(i++)
            src.push(arr)
          } ;
          that.m_name = data.data.name
          that.description = data.data.desc
          var videoObject = {
            container: '#video', // “#”代表容器的ID，“.”或“”代表容器的class
            variable: 'player', // 该属性必需设置，值等于下面的new chplayer()的对象
            // flashplayer:true,// 如果强制使用flashplayer则设置成true

            video: src// 视频地址
          }
          new ckplayer(videoObject)
        }
      })
    },
    video1 (id) { // 请求视频
      $.get(`${this.url}/video/url?id=${id || this.id}`, res => {
        var videoObject = {
          container: '#video', // “#”代表容器的ID，“.”或“”代表容器的class
          variable: 'player', // 该属性必需设置，值等于下面的new chplayer()的对象
          // flashplayer: true, // 如果强制使用flashplayer则设置成true
          preload: false,
          duration: false,
          video: res.urls[0].url// 视频地址
          // video: [
          //   [res.urls[0].url, 'video/mp4', '240', 0],
          //   [res.urls[0].url, 'video/mp4', '480', 0]
          // ]// 视频地址
        }
        new ckplayer(videoObject).addListener('error', () => {
          this.$alert(`选择以下地址然后右键选择转到改地址进行播放或者下载<span style="user-select: all">${res.urls[0].url}</span>`, '播放失败', {
            // confirmButtonText: '确定',
            dangerouslyUseHTMLString: true
            })
      })
      $.get(`${this.url}/video/detail?id=${id || this.id}`, res => {
        this.data = res.data
      })
    })},
    allmv (id) { // 请求相关视频
      this.allList = null
      $.get(`${this.url}/related/allvideo?id=${id || this.id}`, res => {
        this.allList = res.data
      })
    }
  },
  mounted: function () {
    isNaN(this.id) ? this.video1() : this.videoData()
    this.allmv()
  },
  watch: {
    $route (val) {
      isNaN(val.params.id) ? this.video1(val.params.id) : this.videoData(val.params.id)
      this.allmv(val.params.id)
    }
  }
}
</script>

<style scoped>
.mvplay{
  padding-top: 20px;
  width: 1200px;
  margin: 0 auto;
  /*text-align: center;*/
  height: calc(100% - 83px);
}
.mvplay>div{
  display: inline-block;
  width: 29%;
  vertical-align: top;
}
#video{margin: 0 auto;margin-top: 20px;}
.mvplay>div:first-child{
  width: 70%;
  padding-left: 30px;
  box-sizing: border-box;
}
  .description{
    margin-top: 20px;
  }
  .description>p{
    line-height: 30px;
    color: #666666;
  }
  .mvplay>h2{
    margin-bottom: 20px;
  }
  .allList li{
    display: inline-block;
    margin: 0 10px;
    width: 138px;
    vertical-align: top;
  }
.allList li p{
  font-size: 14px;
}
.allList li img{
  width: 100%;
}
.allList{
  margin-top: 20px;
}
</style>
