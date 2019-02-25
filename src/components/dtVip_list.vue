<template>
    <div class="new_list">
      <div v-if="hasSucc" class="box">
        <img src="../assets/loading.gif" alt="">
      </div>
      <h2 style="text-align: center;margin-top: 50px;color: #158fe1" v-if="list.length==0">正在加载中，请稍后。。。</h2>
      <ul>
        <li v-for="item in list">
          <router-link :to="{name:'dtDetail',params:{id:item.id}}" :title="item.rcmdText">
            <img :src="item.picUrl+'?param=150x150'" alt="">
            <p>{{item.name}}</p>
          </router-link>
        </li>
      </ul>
      <p>
        <button v-if="page" @click="page-=15;add();hasSucc=true">上一页</button>
        <button v-if="hasMore" @click="page+=15;add();hasSucc=true">下一页</button>
      </p>
    </div>
</template>

<script>
export default {
  name: 'new_list',
  data () {
    return {
      new_n: 0,
      url: 'http://ruidong.cloudno.de',
      list: [],
      page: 0,
      hasSucc: true,
      hasMore: true
    }
  },
  methods: {
    add: function () {
      let that = this
      $.get(that.url + '/dj/paygift?offset=' + that.page + '&limit=15',
        function (data) {
          that.hasSucc = false
          if (!data.data.hasMore) {
            that.hasMore = false
            return false
          }
          that.list = data.data.list
        }
      )
    }
  },
  mounted: function () {
    this.add()
    // alert('暂时无法播放此页内容，等待解决！！！')
    this.$alert('暂时无法播放此页内容，等待解决！！！', '温馨提示', {
      confirmButtonText: '确定'
      // callback: action => {
      //   this.$message({
      //     type: 'info',
      //     message: `action: ${action}`
      //   })
      // }
    })
  }
}
</script>

<style scoped>
  .new_list ul img{
    width: 100%;
    height: 200px;
  }
  .new_list li{
    width: 200px;
    display: inline-block;
    vertical-align: top;
    height: 250px;
    margin: 20px;
  }
  .new_list li p{
    text-align: center;
  }
  .new_list{
    width: 1200px;
    margin: 0 auto;
  }
  .new_list>p>button{
    border: 0;
    background: #009af3;
    color: #fff;
    padding: 5px 10px;
    margin: 20px;
    border-radius: 3px;
  }
  .new_list>p{
    text-align: center;
  }
</style>
