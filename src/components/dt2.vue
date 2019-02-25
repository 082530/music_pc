<template>
  <div class="dt2">
    <ul>
      <li v-for="item in djRadios">
        <router-link :to="{name:'dtDetail',params: {id:item.id}}">
          <img :src="item.picUrl+'?param=150x150'" alt="">
          <div>
            <p>{{item.name}}</p>
            <span>{{item.rcmdtext}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'dt2',
  data () {
    return {
      url: 'http://ruidong.cloudno.de',
      djRadios: ''
    }
  },
  computed: {
    ...mapState({
      dt_id: state => state.dt_id
    })
  },
  methods: {
    add () {
      let that = this
      $.get(`${that.url}/dj/recommend/type?type=${that.dt_id}`, function (data) {
        that.djRadios = data.djRadios
      })
    }
  },
  beforeMount () {
    this.add()
  },
  watch: {
    dt_id: function () {
      this.djRadios = null
      this.add()
    }
  }

}
</script>

<style scoped>
  .dt2 li{
    display: inline-block;
    margin:  10px 20px;
    width: 150px;
    vertical-align: top;
  }
  .dt2 img{
    display: block;
    margin: 0 auto;
  }
  .dt2 span{
    font-size: 12px;
    color: #666666;
  }
  .dt2{
    width: 1000px;
    margin: 0 auto;
  }
  .dt2 p{
    line-height: 30px;
  }
</style>
