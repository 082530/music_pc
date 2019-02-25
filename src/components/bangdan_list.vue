<template>
    <div class="bd">
      <keep-alive>
        <div>
          <ul>
            <li v-for="items in list">
              <router-link :to="{name:'album',params:{id:items.al.id}}">
                <img :src="items.al.picUrl+'?param=108x100'" alt="">
                <span>{{items.al.name}}--{{items.ar[0].name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </keep-alive>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'bangdan',
  data () {
    return {
      url: 'http://ruidong.cloudno.de',
      // id: this.bd1,
      list: '',
      // s: this.st
    }
  },
  computed: {
    ...mapState({
      bd1: state => state.bdId,
      st: state => state.st
    })
  },
  methods: {
    add1 () {
      let that = this
      that.list = null
      $.get(this.url + '/playlist/detail?id=' + that.bd1, function (data) {
        that.list = data.playlist.tracks
      })
    }
  },
  // mounted: function () {
  //   console.log(this.st)
  //   // this.add1()
  // },
  watch: {
    bd1 () {
      this.add1()
    }
  }
}
</script>

<style scoped>
.bd>div{
  display: inline-block;
  vertical-align: top;
  width: 100%;
}
  .bd img{
    height: 100px;
    display: block;
    margin: 0 auto;
  }
.bd li{
  height: 120px;
  margin: 10px 0;
  display: inline-block;
  vertical-align: top;
  width: 18%;
  text-align: center;
  overflow: hidden;
}
  .bd{
    width: 1200px;
    margin: 0 auto;
  }
.bd li>a>*{
  vertical-align: top;
}
.bd li>a>span{
  display: inline-block;
  width: 74%;
}
.bd li>a{
  display: inline-block;
}
</style>
