<template>
  <div class="bd">
    <div v-loading="loading"
         element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading"
         :data="mv" style="height: 100%">
      <h2>mv 排行</h2>
      <ul>
        <li v-for="items in mv">
          <router-link :to="{name:'mvPlay',params:{id:items.id}}">
            <img :src="items.cover+'?param=120x100'" alt="">
            <span>{{items.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bangdanMv',
  data () {
    return {
      url: 'http://ruidong.cloudno.de',
      hot: '',
      new1: '',
      mv: '',
      loading: true
    }
  },
  mounted: function () {
    let that = this
    $.get(this.url + '/top/mv?limit=100', function (data) {
      that.mv = data.data
      that.loading = false
    })
  }
}
</script>

<style scoped>
  .bd>div{
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
  .bd{
    width: 100%;
    height: calc(100% - 61px);
  }
  .bd img{
    /*width: 50%;*/
    height: 100px;
    display: block;
    margin: 0 auto;
  }
  .bd li{
    height: 120px;
    margin: 10px 0;
    display: inline-block;
    vertical-align: top;
    width: 20%;
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
