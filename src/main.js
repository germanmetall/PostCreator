import '@/assets/styles/tailwind.css'
import '@/assets/styles/main.scss'
import 'vue-toast-notification/dist/theme-sugar.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastPlugin)

app.mount('#app')
