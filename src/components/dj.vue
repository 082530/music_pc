<template>
  <div class="dt" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       :data="category" style="height: calc(100% - 61px)">
    <!--分类-->
    <div class="category">
      <ul>
        <li v-for="item in category" @click="add_dtId(item.id)">
          <router-link :to="{name:'dt2'}">
            <img :src="item.pic84x84IdUrl" alt="">
            <p>{{item.name}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'dj',
  data () {
    return {
      url: 'http://ruidong.cloudno.de',
      tj_list: '',
      jc_list: '',
      category: '',
      loading: true
    }
  },
  beforeMount () {
    let that = this
    $.get(`${that.url}/dj/catelist`, function (data) {
      that.category = data.categories
      that.loading = false
    })
  },
  methods: {
    ...mapMutations(['add_dtId'])
  }
}
</script>

<style scoped>
@import "../assets/dt.css";
</style>
