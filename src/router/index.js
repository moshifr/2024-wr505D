import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../views/LoginView.vue'
import Search from '../views/SearchView.vue'
import { useSession } from '../stores/session';


const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/hello/:name",
      name: "hello",
      component: HelloWorld
    },
    {
      path: "/login",
      name:"login",
      component: Login
    },
    {
      path: "/search",
      name:"search",
      component: Search
    }
  ]
})

router.beforeEach((to, from, next) => {
  const session = useSession();

  if (session.loggedIn === true && to.name === "login" ) {
    next('search')
  }  else {
    next()
  }
})

export default router
