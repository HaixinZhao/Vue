# 基于vue的webapp demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:7775
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
1.安装vue-cli全局脚手架：npm install --global vue-cli
2.安装mockjs：npm install mockjs --save-dev

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
这是个大体项目的框架：vue2+vue-router2+webpack+vuex+axios
一：开发过程中环境可能会有很多种，所以我独立出一个文件夹：config
二：项目中如果有很多数据是多个页面需要使用的，建议用vuex（当然，vuex可用可不用，此项目用了），所以这里会有一个store文件夹，这里是存取数据的。
三：整个项目中header是公共的一个组件。。你只需要根据UI把所有header写在一个组件中即可，然后根据判断来显示不同的header。