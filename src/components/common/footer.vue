<template>
  <section class="footer">
    <section class="index">
      <router-link to='/' exact>
        <i></i>
        <p>Carrie</p>
      </router-link>
    </section>
    <section class="profit">
      <router-link to='/carrie'>
        <i></i>
        <p>浮伤年华</p>
      </router-link>
    </section>
    <section class="club">
      <router-link to='/carrie2'>
        <i></i>
        <p>忧伤说笑</p>
      </router-link>
    </section>
    <section class="mine">
      <router-link to='/carrie3'>
        <i></i>
        <p>剧情再美</p>
      </router-link>
    </section>
    <section class="banklist">
      <router-link to='/mine'>
        <i></i>
        <p>终究是戏</p>
      </router-link>
    </section>
  </section>
</template>

<script>

export default {
  name: 'vFooter',
  data () {
    return {}
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  width:100%;
  height: 0.96rem;
  position: fixed;
  /*right: 0;*/
  left: 0;
  z-index: 120;
  bottom: 0;
  background:white;
  border-top: 2px solid rgba(245,245,245,0.8);
}
.footer section{
  width: 19%;
  text-align:center;
  display: inline-block;
}
.footer section i{
  display:block;
  width:0.42rem;
  height: 0.4rem;
  margin: 0.1rem auto 0.04rem;
}
.footer .index i{
  background:url('./../../assets/footer/index.svg') no-repeat;
}
.footer .index .router-link-active i{
  background:url('./../../assets/footer/indexActive.svg') no-repeat;
}
.footer .banklist i{
  background:url('./../../assets/footer/investment1.svg') no-repeat;
}
.footer .banklist .router-link-active i{
  background:url('./../../assets/footer/investment.svg') no-repeat;
}
.footer .profit i{
  background:url('./../../assets/footer/investment1.svg') no-repeat;
}
.footer .profit .router-link-active i{
  background:url('./../../assets/footer/investment.svg') no-repeat;
}
.footer .club i{
  background:url('./../../assets/footer/investment1.svg') no-repeat;
}
.footer .club .router-link-active i{
  background:url('./../../assets/footer/investment.svg') no-repeat;
}
.footer .mine i{
  background:url('./../../assets/footer/investment1.svg') no-repeat;
}
.footer .mine .router-link-active i{
  background:url('./../../assets/footer/investment.svg') no-repeat;
}
.footer section p{
  font-size: 0.2rem;
  line-height: 0.24rem;
  color: #B3B3B3;
  margin-top: 0.15rem;
}
</style>
