import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '@/views/Auth.vue'
import Settings from '@/views/Settings.vue'
import { useAuthStore } from '@/stores/auth'
import Telegram from '@/views/preview/Telegram.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/preview/telegram',
      name: 'preview-telegram',
      component: Telegram
    }
  ]
})

router.beforeEach((to, from) => {
  const store = useAuthStore()
  store.getCurrentUser()
  if (store.currentUser && +(new Date()) > +store.currentUser?.logoutTime) {
    store.logout()
    return '/auth'
  }
  if (to.name !== 'auth' && Object.keys(store.currentUser || {}).length == 0) return '/auth'
})

export default router
