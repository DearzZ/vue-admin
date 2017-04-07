// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill'   // bable-polyfill ---- babel 默认不转码部分api ，使用babel-polyfill做一个垫片
import Vue from 'vue'    //  vue
import App from './App'  // 同级目录下App.vue,router-view
import VueRouter from 'vue-router'   // vue-router
import store from './vuex/store'   // vuex应用仓库，包含应用中大部分状态，可读取，改变store中状态的唯一途径是显式提交mutations。
import Vuex from 'vuex'            //vue的状态管理模式，集中式存储管理应用的所有组件状态
import ElementUI from 'element-ui'               //   vue  UI组件
import 'element-ui/lib/theme-default/index.css'  //   vue UI组件默认配置主题
import 'font-awesome/css/font-awesome.min.css'    //  font-awesome  图标字体库

import routers from './routers'        //  页面路由
/* eslint-disable no-new */

//  使用vue组件
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);


const router = new VueRouter({
    routers
});

router.beforeEach((to, from, next) => {
    //NProgress.start();
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
});

new Vue({
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)

}).$mount('#app')   //  挂载到#app的下
