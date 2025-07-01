import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import vuetify from './plugins/vuetify';
import '@/scss/style.scss'; // @ é um alias para src
import './plugins/yup';
import './plugins/axios';
import pinia from './plugins/pinia';
import { useMeStore } from './stores/me';

const app = createApp(App)
app.use(pinia)

const meStore = useMeStore();

meStore.getMe()
  .finally(() => { // .finally -> vai trazer independente do sucesso ou falha
    app
      .use(router)
      .use(vuetify)
      .mount('#app')
  })
