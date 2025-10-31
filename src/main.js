// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
import App from './App.vue'
import './style.css'



const app = createApp(App)
app.use(createPinia())
app.use(Toast)
app.mount('#app')
