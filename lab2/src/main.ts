//import './assets/main.css'
import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// cannot use let coz strings
const x = 'helxysx'
console.log(x)

app.use(createPinia())
app.use(router)

app.mount('#app')
