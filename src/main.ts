/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 19:09:17
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-11 14:41:32
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')

