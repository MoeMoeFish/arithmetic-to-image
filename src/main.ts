/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 19:09:17
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-10 20:11:23
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

