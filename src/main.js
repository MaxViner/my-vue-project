import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import store from './store/store'

app.use(router)
app.use(store); 
app.mount('#app')

