import Vue from 'vue'
import Main from './App.vue'
import first from './components/fistRouter.vue'
import VueRouter from 'vue-router'

//引入组件并使用2个模块
Vue.use(VueRouter)
//Vue.use(VueResource)

//Vue.http.options.emulateJSON = true

var AppS = Main
//hash路由开启
var router = new VueRouter({
  hashbang: true
})
//map映射
router.map({
  '/home': {
    component: first
  }
})
//设置初始页面
router.redirect({
  '/': '/'
})
//路由切换前后钩子函数
router.beforeEach(function (transition) {
  var toPath = transition.to.path
  console.info()
  if (toPath.replace(/[^/]/g, '').length > 1) {
    router.app.isIndex = false
  } else {
    router.app.isIndex = true
  }
  transition.next()
})

router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
})

router.start(AppS, '#main')

window.router = router
