<template>
  <div class="dt">
    <div class="tj">
      <!--精选电台-->
      <div>
        <h2>精选电台</h2>
        <ul>
          <li v-for="item in tj_list">
            <router-link :to="{name:'dtDetail',params:{id:item.id}}">
              <img :src="item.picUrl+'?param=40x40'" alt="" >
              <div>
                <p>{{item.name}}</p>
                <i>{{item.rcmdtext}}</i>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!--精彩节目推荐-->
      <div>
        <h2>精彩节目推荐</h2>
        <ul>
          <li v-for="item in jc_list">
            <router-link :to="{name:'dtDetail',params: {id:item.radio.id}}">
              <img :src="item.radio.picUrl+'?param=40x40'" alt="">
              <div>
                <p>{{item.radio.name}}</p>
                <i>{{item.reason}}</i>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dt1',
  data () {
    return {
      url: 'http://ruidong.cloudno.de',
      tj_list: '',
      jc_list: '',
      category: ''
    }
  },
  beforeMount () {
    let that = this
    $.get(`${that.url}/dj/recommend`, function (data) {
      that.tj_list = data.djRadios
    })
    $.get(`${that.url}/program/recommend`, function (data) {
      that.jc_list = data.programs
    })
  }
}
</script>

<style scoped>
  @import "../assets/dt.css";
</style>
