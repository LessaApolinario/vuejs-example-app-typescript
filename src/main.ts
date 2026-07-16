import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./ui/routes";
import "./ui/styles/globals.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
