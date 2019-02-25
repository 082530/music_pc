<template>
    <div class="bd">
      <el-container>
        <el-aside>
          <keep-alive>
            <ul class="list">
              <li class="first">榜单</li>
              <li v-for="(item,key) in list" @click="changeId(item.id);keys=key" :class="keys==key?'active':''">
                <router-link to="bangdanList">
                  <img :src="item.coverImgUrl" alt="">
                  <div>
                    <h4>{{item.name}}</h4>
                    <h6>{{item.updateFrequency}}</h6>
                  </div>
                </router-link>
              </li>
            </ul>
          </keep-alive>
        </el-aside>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>

    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'bangdan',
  data () {
    return {
      url: 'http://ruidong.cloudno.de',
      list: '',
      keys: 0
    }
  },
  methods: {
    ...mapMutations(['first', 'changeId'])
  },
  computed: {
    ...mapState({
      li: state => state.list,
      state: state => state.bdId
    })
  },
  mounted: function () {
    let that = this
    $.get(this.url + '/toplist', function (data) {
      that.list = data.list
      // console.log(data.list)
      that.changeId(data.list[0].id)
      that.first()
    })
  }
}
</script>

<style scoped>
  @import "../assets/bd.css";

  .bd img{
    height: 100%;
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
  h6{
    color: #999999;
  }
</style>
