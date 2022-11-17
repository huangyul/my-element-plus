import { createApp } from 'vue'
import App from './App.vue'
import { installAll } from './component'
import router from './router'
import './style/element-ui@2.13.2.css'

const app = createApp(App)
installAll(app)
app.use(router)
app.mount('#app')
