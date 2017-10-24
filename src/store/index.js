// 组装模块并导出 store 的文件
import Vuex from 'vuex'
import Vue from 'vue'

import carrie from './modules/carrie';
import carrie2 from './modules/carrie2';
import carrie3 from './modules/carrie3';
import common from './modules/common';
import mine from './modules/mine';

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);
// 导出需要的模块
export default new Vuex.Store({
  modules: {
    common,
    carrie,
    carrie2,
    carrie3,
    mine
  },
  plugins: [createLogger()]
});
