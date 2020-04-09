import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


/* hosting
deploy: npm install -g firebase-tools
firebase login 
Инициируйте проект:

$ firebase init
Поместите статические файлы в каталог развертывания (по умолчанию для них будет установлен открытый доступ).

Выполните развертывание сайта:

$ firebase deploy
*/