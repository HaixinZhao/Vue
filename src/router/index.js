import Vue from 'vue'
import Router from 'vue-router'
 /* 引入vuex用于判断登陆 */
import store from './../store/index'
/* 首页子路由组件 */
import IndexRouter from './../components/index/IndexRouter.vue'
/* 浮伤年华子路由组件 */
import CarrieRouter from './../components/carrie/CarrieRouter.vue'
/* 忧伤说笑子路由组件 */
import Carrie2Router from './../components/carrie2/CarrieRouter2.vue'
/* 剧情再美子路由组件 */
import Carrie3Router from './../components/carrie3/CarrieRouter3.vue'
/* 终究是戏子路由组件 */
import MineRouter from './../components/mine/MineRouter.vue'
/* 登陆页面 */
// import Login from 'components/common/login.vue'

// 页面切换效果 配置浏览器回退按钮
Router.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

const routes = [{
  path: '/',
  component: IndexRouter,
  children: [{
      path: '/',
      name: 'index',
      component: resolve => require(['./../view/index.vue'], resolve),
    }]
}, {
  path: '/carrie',
  component: CarrieRouter,
  children: [{
    path: '/',
    name: 'carrie',
    component: resolve => require(['./../view/carrie.vue'], resolve)
  }]
}, 
{
  path: '/carrie2',
  component: Carrie2Router,
  children: [{
    path: '/',
    name: 'carrie2',
    component: resolve => require(['./../view/carrie2.vue'], resolve)
  }]
}, 
{
  path: '/carrie3',
  component: Carrie3Router,
  children: [{
    path: '/',
    name: 'carrie3',
    component: resolve => require(['./../view/carrie3.vue'], resolve)
  }]
}, 
{
  path: '/mine',
  component: MineRouter,
  children: [{
      path: '/',
      name: 'mine',
      component: resolve => require(['./../view/mine.vue'], resolve)
    }]
  }
];

const router = new Router({
  routes
})
// 需要显示页脚footer组件的路由name数组
const footerShowArr = ['index', 'carrie', 'carrie2', 'carrie3', 'mine']

export default router