<template>
    <div class="ply" >
      <div :style="{background: `url(${img_src}?param=1920x800) no-repeat`,height:h+'px'}"></div>
      <div>
        <section style="height:500px;padding-top: 50px">
          <div>
            <p :time="key" v-for="(item, key) of lyric">{{item}}</p>
          </div>
        </section>
        <footer>
          <div class="img">
            <img src="" alt="">
          </div>
          <div class="control">
        <span id="pre">
            <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2421"><path d="M448 512 896 960 896 64ZM128 64l256 0 0 896-256 0 0-896Z" p-id="2422"></path></svg>
        </span>
            <span id="play">
            <span><svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5608"><path d="M128.171284 965.968936V57.574307C128.171284 15.992863 166.554155-15.992863 201.738454 9.595718c28.787154 19.191436 617.324519 419.013015 668.501681 454.197314 31.985726 22.390008 31.985726 76.765743 0 99.155752-35.184299 25.588581-626.920237 425.410161-671.700253 454.197315-28.787154 19.191436-70.368598-3.198573-70.368598-51.177163z" p-id="5609"></path></svg></span>
            <span style="display: none"><svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5689"><path d="M128.000251 109.567928C128.000251 49.087968 176.640219 0 237.696179 0 298.30414 0 347.520108 49.407968 347.520108 109.567928V914.429402A109.439928 109.439928 0 0 1 237.696179 1023.99933 109.887928 109.887928 0 0 1 128.000251 914.430402V109.567928z m548.543641 0C676.543892 49.087968 725.24786 0 786.303821 0 846.847781 0 895.999749 49.407968 895.999749 109.567928V914.429402A109.439928 109.439928 0 0 1 786.303821 1023.99933a109.887928 109.887928 0 0 1-109.759929-109.567928V109.567928z" fill="" p-id="5690"></path></svg></span>
        </span>
            <span id="next">
            <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5002"><path d="M576 512 128 960 128 64ZM640 64l256 0 0 896-256 0 0-896Z" p-id="5003"></path></svg>
        </span>
          </div>
          <div class="current">
            <h3>---</h3>
            <div><p><span></span></p></div>
            <p class="time"><span>00:00</span><span>/00:00</span></p>
          </div>
          <div class="li">
            <!--<div class="volume"><div><p><span></span></p></div></div>-->
            <span @click="audio.volume=0;vod=0" v-show="vod">
<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;color: #fff;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6567"><path d="M823.296 772.608c-17.92-17.92-17.92-41.472 0-59.392 114.688-113.152 114.688-291.328 0-404.48-17.92-17.92-17.92-41.472 0-59.392s42.496-17.92 60.416 0c72.192 71.68 114.688 160.768 114.688 256s-42.496 190.464-114.688 255.488c-6.144 6.144-17.92 11.776-30.208 11.776-12.288 12.288-24.064 6.144-30.208 0z m-120.832-65.024c-12.288 0-24.064-6.144-30.208-11.776-17.92-17.92-17.92-41.472 0-59.392 72.704-71.168 72.704-178.176 0-249.856-17.92-17.92-17.92-41.472 0-59.392s42.496-17.92 60.416 0c108.544 100.864 108.544 261.632 0 362.496-12.288 11.776-18.432 17.92-30.208 17.92zM478.72 94.72c54.272-41.472 96.768-17.92 96.768 47.616V885.76c0 65.536-42.496 83.456-90.624 41.472l-217.6-178.176H146.432c-66.56 0-120.832-53.76-120.832-118.784V386.048c0-65.536 54.272-118.784 120.832-118.784H261.12l217.6-172.544z" p-id="6568"></path></svg>        </span>
            <span v-show="!vod" @click="audio.volume=1;vod=1">
        <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;color: #fff;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6662"><path d="M944 512c0-191.872-123.008-289.792-128.256-293.888-20.736-16.256-50.624-12.48-67.008 8.256C732.416 247.04 736 277.12 756.544 293.632 760.256 296.64 848 368.64 848 512c0 117.76-58.496 186.496-81.536 209.216l-49.408-49.408c22.528-30.976 44.096-75.904 44.096-135.232 0-121.856-90.624-183.744-94.528-186.304-21.888-14.592-51.2-8.768-65.984 12.992C585.728 384.896 591.36 414.656 612.928 429.76c2.112 1.472 52.16 37.376 52.16 106.752 0 27.328-7.808 49.216-17.344 65.984L512 466.752 512 64 310.656 265.344l-160-160L105.344 150.656l160 160L256 320 64 320l0 384 192 0 256 256L512 557.248l93.504 93.504c-14.72 15.872-17.984 39.872-5.44 58.624 9.344 13.888 24.448 21.376 39.936 21.376 9.216 0 18.496-2.624 26.624-8.064 0.512-0.384 2.88-2.048 6.208-4.608l71.744 71.744c1.344 2.56 1.984 5.312 3.84 7.68 4.864 6.272 11.072 10.816 17.792 13.952l107.2 107.2 45.248-45.248-84.416-84.416C869.568 753.728 944 662.016 944 512z" p-id="6663"></path></svg>
    </span>
            <span @click="show=1">
            <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2061"><path d="M921.699 549.049H355.616c-20.749 0-37.54-16.79-37.54-37.54 0-20.733 16.791-37.542 37.54-37.542h566.083c20.756 0 37.546 16.808 37.546 37.542 0 20.75-16.79 37.54-37.546 37.54z m0-300.324H355.616c-20.749 0-37.54-16.809-37.54-37.541 0-20.731 16.791-37.54 37.54-37.54h566.083c20.756 0 37.546 16.809 37.546 37.54 0 20.732-16.79 37.54-37.546 37.54z m-785.19 638.183c-41.464 0-75.086-33.617-75.086-75.076 0-41.466 33.622-75.08 75.087-75.08 41.46 0 75.08 33.615 75.08 75.08 0 41.46-33.62 75.076-75.08 75.076z m0-300.32c-41.464 0-75.086-33.621-75.086-75.078 0-41.468 33.622-75.083 75.087-75.083 41.46 0 75.08 33.615 75.08 75.083 0 41.456-33.62 75.079-75.08 75.079z m0-300.324c-41.464 0-75.086-33.616-75.086-75.08 0-41.466 33.622-75.082 75.087-75.082 41.46 0 75.08 33.615 75.08 75.082 0 41.465-33.62 75.08-75.08 75.08z m219.107 488.023h566.083c20.756 0 37.546 16.791 37.546 37.54s-16.79 37.542-37.546 37.542H355.616c-20.749 0-37.54-16.792-37.54-37.541s16.79-37.541 37.54-37.541z m0 0" p-id="2062"></path></svg>
          </span>
          </div>
        </footer>
        <!--播放列表-->
        <aside v-show="show">
          <p class="title">
            <span>播放队列/{{plist.length}}</span>
            <span>
            <a @click.stop="rem(-1)">
            <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2538"><path d="M802.133333 128H221.866667C170.666667 128 128 170.666667 128 221.866667V256h768v-34.133333c0-51.2-42.666667-93.866667-93.866667-93.866667z m-170.666666-59.733333L648.533333 170.666667H375.466667L392.533333 68.266667h238.933334zM640 0H384c-25.6 0-51.2 25.6-51.2 51.2l-25.6 128c0 25.6 17.066667 51.2 42.666667 51.2h315.733333c25.6 0 42.666667-25.6 42.666667-51.2L691.2 51.2C691.2 25.6 665.6 0 640 0z m179.2 324.266667H204.8c-34.133333 0-59.733333 25.6-59.733333 59.733333l51.2 580.266667c0 34.133333 34.133333 59.733333 68.266666 59.733333h477.866667c34.133333 0 68.266667-25.6 68.266667-59.733333l51.2-580.266667c17.066667-34.133333-8.533333-59.733333-42.666667-59.733333zM384 896H290.133333l-34.133333-443.733333H384v443.733333z m196.266667 0H452.266667V452.266667h128v443.733333z m153.6 0H640V452.266667h128l-34.133333 443.733333z" fill="#999999" p-id="2539"></path></svg>
            </a>|
            <a @click.stop="show=0">
              <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2415"><path d="M512 441.69251360348846L254.3219023179334 183.956407350782a49.71412125496538 49.71412125496538 0 1 0-70.30748492361464 70.30748639651151L441.63450503284866 512l-257.7361077256034 257.6780976820668a49.71412125496538 49.71412125496538 0 1 0 70.30748639651151 70.30748492361464L512 582.3654949671514l257.6780976820668 257.7361077256034a49.71412125496538 49.71412125496538 0 1 0 70.30748492361464-70.30748639651151L582.3654949671514 512l257.7361077256034-257.6780976820668a49.71412125496538 49.71412125496538 0 1 0-70.30748639651151-70.30748492361464L512 441.63450503284866z" p-id="2416"></path></svg>
            </a>
          </span>
          </p>
          <div>
            <ul class="playlist">
              <li @click.stop="playsong($event)" v-for="(item,key) in plist">
                <a>
                  <span>{{key+1}}</span>{{item.name}}
                  <em>
                    <a title="删除" @click.stop="rem(key)" style="margin-right: 6px">
                      <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2538"><path d="M802.133333 128H221.866667C170.666667 128 128 170.666667 128 221.866667V256h768v-34.133333c0-51.2-42.666667-93.866667-93.866667-93.866667z m-170.666666-59.733333L648.533333 170.666667H375.466667L392.533333 68.266667h238.933334zM640 0H384c-25.6 0-51.2 25.6-51.2 51.2l-25.6 128c0 25.6 17.066667 51.2 42.666667 51.2h315.733333c25.6 0 42.666667-25.6 42.666667-51.2L691.2 51.2C691.2 25.6 665.6 0 640 0z m179.2 324.266667H204.8c-34.133333 0-59.733333 25.6-59.733333 59.733333l51.2 580.266667c0 34.133333 34.133333 59.733333 68.266666 59.733333h477.866667c34.133333 0 68.266667-25.6 68.266667-59.733333l51.2-580.266667c17.066667-34.133333-8.533333-59.733333-42.666667-59.733333zM384 896H290.133333l-34.133333-443.733333H384v443.733333z m196.266667 0H452.266667V452.266667h128v443.733333z m153.6 0H640V452.266667h128l-34.133333 443.733333z" fill="#999999" p-id="2539"></path></svg>
                    </a>|
                    <a title="下载" :href="'http://music.163.com/song/media/outer/url?id='+item.id+'.mp3'">
                      <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1143"><path d="M1022.90118 818.11117h-0.743201c-3.618113-28.748118-27.873058-51.043168-57.596129-51.043169-29.72407 0-53.979015 22.296049-57.591135 51.043169h-0.743202s0 87.503003-87.509995 87.503002H206.17752c-87.505 0-87.505-87.503003-87.505-87.503002h-0.728218c-3.634096-28.748118-27.89004-51.043168-57.607117-51.043169-29.72407 0-53.978016 22.296049-57.61411 51.043169H1.997854s0 1.952902 0.189796 5.40819c-0.015983 0.645307-0.189796 1.242665-0.189796 1.882977 0 4.404269 0.58637 8.663693 1.502386 12.775277 6.167375 51.422761 38.035142 184.111224 202.676281 184.111224h612.540997c154.405135 0 192.19554-125.528155 201.325732-179.722938a57.8099 57.8099 0 0 0 2.85793-17.163563c0-0.992933-0.248733-1.925931-0.291686-2.902881 0.216767-2.78301 0.291687-4.388286 0.291686-4.388286zM154.226327 491.987498L475.169564 811.721034a53.278767 53.278767 0 0 0 37.602607 15.517331 53.283762 53.283762 0 0 0 37.601607-15.517331l320.95922-319.722548c20.763695-20.685779 20.763695-54.227748 0-74.918521-20.769689-20.689775-54.43952-20.689775-75.204214 0L566.538414 645.767305V53.911088a52.77331 52.77331 0 0 0-15.61123-37.379846 53.192859 53.192859 0 0 0-37.576635-15.433421c-29.369451 0-53.178874 23.640605-53.178874 52.813267v593.06292L229.418554 417.079965c-13.350658-13.769209-33.125416-19.289279-51.713448-14.443485-18.594026 4.847792-33.111431 19.311255-37.977204 37.833359-4.866772 18.517109 0.677272 38.216947 14.498425 51.517659z" p-id="1144"></path></svg>
                    </a>
                  </em>

                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'song_play',
  data () {
    return {
      url: 'http://ruidong.cloudno.de',
      id: this.$route.params.id,
      src: '',
      audio: '',
      song_name: '',
      img: '',
      timelength: '',
      ch: null,
      end: '',
      state: 0,
      show: 0,
      isjoin: 0,
      lyric: '',
      lynow: '',
      s: 0,
      nowtime: 0,
      img_src: '',
      h: $(window).height() - 100,
      vod: 1
    }
  },
  beforeDestroy: function () {
    clearInterval(this.ch)
  },
  computed: {
    ...mapState({
      plist: state => state.add_list
    })
  },
  methods: {
    ...mapMutations(['addSong', 'rem']),
    // 错误提示框
    info1 () {
      this.$alert('播放失败！', '提示', {
        confirmButtonText: '确定'
        // callback: action => {
        //   this.$message({
        //     type: 'info',
        //     message: `action: ${ action }`
        //   });
        // }
      })
    },
    // 播放点击的歌曲
    playsong (e) {
      var e = e.path
      let i
      for (var n = 0, c = e.length; n < c; n++) {
        i = $('aside li').index(e[n])
        if (i != -1) break
      }
      this.play(this.plist[i].id, i)
      this.show = 0
    },
    // 转换时间
    tim: function (date) {
      let min = parseInt(date / 60)
      if (min < 10) min = '0' + min
      let s = parseInt(date % 60)
      if (s < 10) s = '0' + s
      let ti = min + ':' + s
      return ti
    },
    rotate: function (img) {
      $('.img>img').attr('src', img)
      this.img_src = img
      if (this.end && !this.audio.paused) {
        //  setInterval(()=>{
        this.iii += 20
        $('.img>img').css('transition', 'all 1000ms linear').css('transform', 'rotate(' + this.iii + 'deg)')
        // },1000)
      } else if (!this.end) {
        this.iii = 0
      }
    },
    // 歌词处理
    lryic: function (lrc) {
      var lyrics = lrc.split('\n')
      var lrcObj = {}
      for (var i = 0; i < lyrics.length; i++) {
        var lyric = decodeURIComponent(lyrics[i])
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g
        var timeRegExpArr = lyric.match(timeReg)
        if (!timeRegExpArr) continue
        var clause = lyric.replace(timeReg, '')
        for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
          var t = timeRegExpArr[k]
          var min = Number(String(t.match(/\[\d*/i)).slice(1)),
            sec = Number(String(t.match(/\:\d*/i)).slice(1))
          var time = min * 60 + sec
          lrcObj[time] = clause
        }
      }
      return lrcObj
    },
    // 播放器控制
    control: function (id, i) {
      let that = this
      let timelength
      let img
      $.get(`${that.url}/lyric?id=${id}`, function (data) {
        if (data.sfy) that.lyric = false
        else that.lyric = that.lryic(data.lrc.lyric)
      })
      $.ajax({
        url: that.url + '/song/detail?ids=' + id,
        type: 'GET',
        async: false,
        success: function (data) {
          // console.log(data.songs[0])
          timelength = parseInt(data.songs[0].dt / 1000)
          that.song_name = data.songs[0].name
          img = data.songs[0].al.picUrl
          // 加入播放列表
          if (!that.isjoin) that.addSong({id: that.id, name: that.song_name})
          $('.playlist>li').removeClass('active')
          if (i == null) {
            setTimeout(() => {
              $('.playlist>li:last-child').addClass('active')
            }, 500)
          } else {
            $('.playlist>li:eq(' + i + ')').addClass('active')
          }
          that.isjoin = 1
          // console.log(this.plist)
        }
      })
      $('.current>h3').html(that.song_name)
      // 监听歌曲获取出错
      this.audio.addEventListener('error', function () {
        that.info1()
      }, true)
      // 进度条
      if (!this.audio.paused) {
        // console.log(this.audio.duration)
        $('#play>span').hide()
        $('#play>span:last-child').show()
        that.ch = setInterval(() => {
          if (that.audio.ended) { // 播放结束
            $('.current').unbind()
            $('.current>div>p>span').unbind()
            $('.current>div').unbind()
            $('.img>img').css('transition', 'none').css('transform', 'rotate(0deg)')
            that.next()
            that.end = 0
            that.s = 0
          } else {
            let now = that.audio.currentTime
            that.nowtime = now
            let state = 0
            for (let key in that.lyric) {
              if (key < now) {
                state = key
              } else {
                that.lynow = state
              }
            }
            //  console.log(`歌词下标时间${state}----当前播放时间${now}`)
            let len = now / timelength
            len = len * 100
            // console.log(timelength);
            $('.current>div>p').css('width', len + '%')
            $('.time>span:first-child').html(that.tim(now))
            that.rotate(img)
            that.end = 1
          }
        }, 1000)
        // for (let i = 0; i < 100; i++) {
        //   if (that.ch == i) { continue }
        //   // clearInterval(i);
        // }
        $('.time>span:last-child').html('/' + that.tim(timelength))
        $('.current').mousemove((e) => {
          e.preventDefault()
          if (that.state) {
            let left = parseInt($('div.img').width()) + parseInt($('div.control').width())

            left = e.screenX - left
            let p_height = parseInt($('.current>div').width())
            left = left / p_height
            $('.current>div>p').css('width', left * 100 + '%')
            that.audio.currentTime = left * timelength
          }
        }).mouseup(() => {
          that.state = 0
        })
        $('.current>div>p>span').mousedown((e) => {
          e.preventDefault()
          that.state = 1
        })
        $('.current>div').click((e) => {
          let wid = parseInt($('div.img').width())
          if (isNaN(wid)) wid = 0
          let left = wid + parseInt($('div.control').width())
          left = e.clientX - left
          let p_height = parseInt($('.current>div').width())
          left = left / p_height
          $('.current>div>p').css('width', left * 100 + '%')
          that.audio.currentTime = left * timelength
        })
      } else {
        $('#play>span').hide()
        $('#play>span:first-child').show()
      }
      ;
      // 播放按钮组
      $('#play').click(function () {
        if (that.audio.paused) {
          that.audio.play()
          $('#play>span').hide()
          $('#play>span:last-child').show()
        } else {
          // console.log(that.audio);
          that.audio.pause()
          $('#play>span').hide()
          $('#play>span:first-child').show()
        }
      })
      // 上一曲
      document.getElementById('pre').onclick = function () {
        that.prev()
        // alert('该功能暂未实现，敬请期待！')
      }
      // 下一曲
      document.getElementById('next').onclick = function () {
        that.next()
        // alert('该功能暂未实现，敬请期待！')
      }
    },
    prev () {
      for (var i = 0, n = $('.playlist>li').length; i < n; i++) {
        if ($($('.playlist>li')[i]).hasClass('active')) var nn = $('.playlist>li')[i]
      }
      let ii = $('.playlist>li').index(nn) - 1
      if (ii < 0) ii = this.plist.length - 1
      let id = this.plist[ii].id
      this.play(id, ii)
    },
    next () {
      for (var i = 0, n = $('.playlist>li').length; i < n; i++) {
        if ($($('.playlist>li')[i]).hasClass('active')) var nn = $('.playlist>li')[i]
      }
      let ii = $('.playlist>li').index(nn) + 1
      if (ii >= this.plist.length) ii = 0
      let id = this.plist[ii].id
      this.play(id, ii)
    },
    play (id, i) {
      let that = this
      new Promise((resolve, reject) => {
        resolve(`http://music.163.com/song/media/outer/url?id=${id}.mp3`)
      }).then(function (src) {
        clearInterval(that.ch)
        $('audio').remove()
        that.audio = null
        that.audio = new Audio(src)
        $('footer').append(that.audio)
        that.audio.play()
        that.control(id, i)
      })
    }
  },
  watch: {
    lynow: function (newVal, oldVal) {
      let str = $('section>div>p')
      for (let a = 0, b = str.length; a < b; a++) {
        let text = $(str[a]).attr('time')
        if (text == newVal) {
          $(str).removeClass('act')
          $(str[a]).addClass('act')
          // 重新计算歌词的高度
          let num, newnum = 9
          for (let c = 0, d = $('section p').length; c < d; c++) {
            if ($($('section p')[c]).hasClass('act')) {
              num = $('section p').index($('section p')[c]) + 1
            }
          }
          let num1 = num - newnum
          //  console.log(`class的行数：${num},一分钟行数：${newnum}`)
          if (num1 > 0) { this.s = num1 * (-35); this.s -= 35 } else if (num1 == 0) this.s -= 35
          else this.s = 0
          // console.log(s)
          $('section>div').css('top', this.s + 'px')
        }
      }
    }
  },
  mounted: function () {
    this.play(this.id, null)
  }
}
</script>

<style scoped>
@import "../assets/song_play.css";
</style>
