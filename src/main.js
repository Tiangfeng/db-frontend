import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

import '@/assets/css/global.css';

const app = createApp(App);

app.use(store).use(router).use(ElementPlus, {
    locale: zhCn,
    size: 'small'
});

// 注册ElementPlus图标.
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app');