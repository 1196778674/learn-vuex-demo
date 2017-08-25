import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: function(resolve){
        require(['@/components/Login'], resolve)
      }
    },
    {
      path: '/',
      name: 'Index',
      component: function(resolve){
        require(['@/components/Index'], resolve)
      },
      children: [
        {
          path: 'home',
          component: function(resolve){
            require(['@/components/Hello'], resolve)
          }
        }
      ]
    },
  ]
})
