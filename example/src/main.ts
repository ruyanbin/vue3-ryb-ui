import { createApp } from 'vue';
import App from './app.vue';
import RybComponent from '@ryb/components';
const app = createApp(App);
app.use(RybComponent);
app.mount('#app');
