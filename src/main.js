import './assets/main.css';
import './style.css';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './router';

const router = createRouter({
  history: createWebHashHistory('/company-info/'),
  routes
});
const app = createApp(App);
app.use(router);
app.mount('#app');
