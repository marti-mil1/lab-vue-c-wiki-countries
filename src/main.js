import { createApp } from "vue";
import App from "./App.vue";

//import router
import router from "./router";

//BEFORE: createApp(App).mount("#app");
createApp(App).use(router).mount("#app");


