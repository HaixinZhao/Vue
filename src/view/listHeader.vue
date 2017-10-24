<template>
  <div class="listHeader clearfix">
    <!-- 占位符0.88rem -->
    <div class="placeholder"></div>
    <div class="listHeaderIN">
      <div class="back_icon" @click="back()" v-if="showBack"></div>
      <div class="back_icon_NaN" v-else="showBack"></div>
      <div class="header_title">
        <span>{{headerData}}</span>
        <!-- 中间搜索按钮 -->
        <i class="arrange" @click="showArrangeList()" v-if="showSearch"></i>
      </div>
      <!-- 右侧搜索按钮 -->
      <router-link to="/search">
        <div class="searchIco" v-if="rightSearch"></div>
      </router-link>
      <!-- 右侧完成按钮 -->
      <div v-if="complete" @click="completed()" style="line-height:0.88rem;font-size:0.36rem;">完成</div>
      <!-- 右侧信用卡活动按钮 -->
      <div v-if="cardWeal" class="cardWeal" :class="{cardWealRed:cardWealRed}" @click="cardWealOpen()" v-show="token != '' && token != null "></div>
      <!-- 我的投资右侧搜索按钮 -->
      <div v-if="sear" @click="searc()" class="sear"></div>
    </div>
    <div class="listHeaderMast" v-if="listArrange" @click="showArrangeList()">
      <ul class="main">
  	     <li :class="index == filtrateKey?'active':''" v-for="(value,index) in filtrate" @click="sendFiltrateKey(index)">{{value}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListHeader',
  data () {
    return {
      listArrange: false,
      // 当前筛选选项的序号
      filtrateKey: 0,
    }
  },
  computed: {
    ...mapGetters([
      'fromPath',
      'sessionId',
      'token',
    ])
  },
  methods: {
    back: function(){
      if(this.goBack == 'toHidden') {
        this.$store.dispatch('back_Icon', false);
      }else if(this.$router.meta){
        this.$router.push(this.fromPath)
      }else if(this.$route.query.redirectPage) {
        this.$router.go(-2);
      }else{
        if(this.$route.query.SOURCE == 'IOS' || this.$route.query.SOURCE == 'ANDROID') {
          this.$router.push('/');
        }else{
          this.$router.go(-1);
        }
      }
    },
    showArrangeList: function() {
      this.listArrange = !this.listArrange;
    },
    completed: function() {
      this.$emit('submit');
      this.back();
    },
    // 筛选选项选择
    sendFiltrateKey: function(index) {
      this.filtrateKey = index;
      this.$emit('filtrateKey', index);
    },
    searc: function(){
      this.$emit('searc');
    },
    // 信用卡活动卡券按钮触发
    cardWealOpen: function() {
      this.$emit('cardWealOpen');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listHeader{
  width:100%; 
}
.placeholder{
  width:100%;
  height: 0.88rem;
  display: block;
}
.listHeaderIN{
  width:100%;
  background:-webkit-linear-gradient(#95AEDA,#0071BC);
  color:#fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index:150;
}
.back_icon{
  width: 0.43rem;
  height: 0.43rem;
  float:left;
  margin:0.23rem 0 0 0.3rem;
  background:url('./../../assets/banklist/icon/goBack.png') no-repeat;
  background-size:contain;
}
.back_icon_NaN{
  width: 0.43rem;
  height: 0.43rem;
  float:left;
  margin:0.23rem 0 0 0.3rem;
}
.header_title{
  font-size:0.36rem;
  float:left;
  width:5.8rem;
  text-align:center;
  line-height:0.88rem;
}
.header_title span{
  display: inline-block;
  text-align:center;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.arrange{
  display: inline-block;
  width:0.32rem;
  height:0.32rem;
  background:url('./../../assets/banklist/icon/arrange.png') no-repeat;
  background-size:contain;
  margin:0.3rem 0 0 0.36rem;
}
.searchIco{
  float:right;
  width:0.38rem;
  height:0.38rem;
  margin-top:0.28rem;
  margin-right:0.3rem;
  background:url(./../../assets/banklist/icon/search.png) no-repeat;
  background-size:contain;
}
/* 银行排行谈层 */
.listHeaderMast{
  width:100%;
  height:100%;
  position:fixed;
  top:0.88rem;
  left:0;
  background:rgba(113,117,141,0.5);
  z-index: 120;
  color:#333;
}
.listHeaderMast .main{
  width:100%;
  padding:0.17rem 0;
  background:rgba(255,255,255,1);
}
.listHeaderMast .main li{
  font-size:0.28rem;
  line-height:0.62rem;
  text-align:center;
}
.listHeaderMast .main .active{
  color:#0071B8;
}
/*我的投资右侧搜索按钮*/
.sear{
  width: 0.43rem;
  height: 0.43rem;
  float:left;
  margin:0.23rem 0 0 0.3rem;
  background:url('../../assets/investment/9.png') no-repeat;
  background-size:contain;
  line-height:0.88rem;
  font-size:0.36rem;
}
/* 信用卡按钮 */
.cardWeal{
  background: url(../../assets/card/cardWeal.png) no-repeat;
  background-size: 100% 100%; 
  width: 0.37rem;
  height: 0.34rem;
  position: absolute;
  right: 0.45rem;
  top: 0.26rem;
}
.cardWealRed{
  background: url(../../assets/card/cardWealRed.png) no-repeat;
  background-size: 100% 100%; 
}
</style>
