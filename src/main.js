import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/router.js'

const app = createApp(App)

app.use(router).mount('#app')
