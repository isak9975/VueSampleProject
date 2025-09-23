import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

// 초기 상태를 만들어주는 main
const app = createApp(App)
app.use(router)
app.mount('#app')


