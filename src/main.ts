import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
/* ルーティングに関係なく表示されるコンポーネントはここで宣言 */
app.component("Header", Header);
app.component("Footer", Footer);
app.use(router);
app.use(store);
app.mount("#app");