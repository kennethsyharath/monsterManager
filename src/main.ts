import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

// import {ipcMain} from 'electron';

// ipcMain.on('asynchronous-message', (event, arg) => {
//   // console.log(arg) // prints "ping"
//   // event.reply('asynchronous-reply', 'pong')
// })

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
