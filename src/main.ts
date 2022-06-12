import { createApp } from 'vue'
import Index from './routes/index.vue'
import { MenuPlugin } from './plugins/menu'
const app = createApp(Index)
app.use(MenuPlugin)
app.mount('#app')
