import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// base.scss만 import (variables와 mixins는 Vite 설정에서 전역으로 로드됨)
import "@/assets/styles/base.scss";

createApp(App).use(router).mount("#app");
