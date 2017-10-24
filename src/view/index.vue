<template>
  <div class="index">
    <list-header header-data="首页" 
    :showTitle="true" 
    :showBack="false" 
    :showSearch="false" 
    goBack="" 
    :rightSearch="false" 
    :complete="false"></list-header>
    <div v-for="(item, key) in newsListShow">
      <news-list
      :newsDate="item"
      :key="key"
      ></news-list>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import api from './../fetch/api.js'
import NewsList from './../components/index/NewsList.vue'
import VFooter from './../components/common/footer.vue'
import ListHeader from './../components/common/listHeader.vue'
export default {
  name: 'index',
  data () {
    return {
      newsListShow: [],
    }
  },
  components: {
    NewsList,
    VFooter,
    ListHeader
  },
  created() {
    this.setNewsApi();
  },
  methods:{
    setNewsApi: function() {
      api.Carrie('/news/index', 'type=top&key=123456')
      .then(res => {
        console.log(res);
        this.newsListShow = res.articles;
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topNav{
  width: 100%;
  background: #ED4040;
  position: fixed;
  top:0rem;
  left: 0;
  z-index: 10;
}
.simpleNav{
  width: 100%;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: '微软雅黑';
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar{height:0px}
.simpleNavBar{
  display: inline-block;
  width: 1.2rem;
  color:#fff;
  font-size:0.3rem;
}
.navActive{
  color: #000;
  border-bottom: 0.05rem solid #000;
}
.placeholder{
  width:100%;
  height: 1rem;
}
</style>
