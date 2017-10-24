/* 此js文件用于存储公用的vuex状态 */
import * as types from './../type.js'
// import {
//   baseUrlHost
// } from './../../config/env'

let finsuithttpUrl = document.location.protocol + '//' + document.location.host

const state = {
  SESSION_ID: '',
  token: '',
  DEVICE_ID: '',
  mobile: '',
  fromPath: '',
  toPath: '',
  // 浮层型头部组件返回按钮状态
  back_Icon: false,
  // 请求数据时加载状态loading
  fetchLoading: false,
  // 公共footer的显示状态
  footerCommon: true,
}

const getters = {
  // SESSION_ID的获取
  sessionId: state => state.SESSION_ID,
  // token的获取
  token: state => {
    if (state.token == '' || state.token == null || state.token == undefined) {
      if (sessionStorage.getItem('token')) {
        state.token = sessionStorage.getItem('token');
        return sessionStorage.getItem('token');
      } else {
        return '';
      }
    } else {
      return state.token
    }
  },
  DEVICE_ID: state => state.DEVICE_ID,
  // 导航钩子函数的页面来源和去处
  fromPath: state => state.fromPath,
  toPath: state => state.toPath,
  // 获取登陆手机号
  mobile: state => {
    if (state.mobile == '' || state.mobile == null) {
      return sessionStorage.getItem('mobile')
    } else {
      return state.mobile
    }
  },
  // 获取浮层型返回按钮给父组件的传值
  back_Icon: state => state.back_Icon = state.back_Icon,
  // 请求数据时加载状态
  fetchLoading: state => state.fetchLoading,
  // 公共footer的显示状态
  footerCommon: state => state.footerCommon,
}

const actions = {
  // 首次请求数据保存 sessionId
  SESSION_ID({
    commit
  }, res) {
    commit(types.SESSION_ID, res)
  },
  // 登陆之后存储token
  storeToken({
    commit
  }, res) {
    sessionStorage.setItem('token', res)
    commit(types.STORE_TOKEN, res)
  },
  STORE_DEVICE_ID({
    commit
  }, res) {
    commit(types.STORE_DEVICE_ID, res);
  },
  // 登陆后存储手机号
  storeMobile({
    commit
  }, res) {
    sessionStorage.setItem('mobile', res)
    commit(types.STORE_MOBILE, res)
  },
  // 登陆拦截 路由的的 from 和 to
  FROM_PATH({
    commit
  }, res) {
    sessionStorage.setItem('fromPath', res)
    commit(types.FROM_PATH, res)
  },
  TO_PATH({
    commit
  }, res) {
    sessionStorage.setItem('toPath', res)
    commit(types.TO_PATH, res)
  },
  // 浮层型返回按钮给父组件的传值
  back_Icon({
    commit
  }, res) {
    commit(types.BACK_ICON, res)
  },
  // 请求数据时状态loading
  FETCH_LOADING({
    commit
  }, res) {
    commit(types.FETCH_LOADING, res)
  },
  // 公用组件 footer 的显示状态
  FOOTER_STATE({
    commit
  }, res) {
    commit(types.FOOTER_STATE, res);
  },
}

const mutations = {
  // 首次登陆保存SESSION_ID
  [types.SESSION_ID](state, res) {
    state.SESSION_ID = res;
  },
  [types.STORE_TOKEN](state, res) {
    state.token = res;
  },
  // 保存设备ID
  [types.STORE_DEVICE_ID](state, res) {
    state.DEVICE_ID = res;
  },
  // 导航钩子页面跳转的来处 和 去处
  [types.FROM_PATH](state, res) {
    state.fromPath = res;
  },
  [types.TO_PATH](state, res) {
    state.toPath = res;
  },
  [types.STORE_MOBILE](state, res) {
    state.mobile = res;
  },
  [types.BACK_ICON](state, res) {
    state.back_Icon = res;
  },
  // 请求数据时loading
  [types.FETCH_LOADING](state, res) {
    state.fetchLoading = res
  },
  // 公用组件 footer 的显示状态个更改
  [types.FOOTER_STATE](state, res) {
    state.footerCommon = res;
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}