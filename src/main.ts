import { createApp } from "vue";
import App from "@/App.vue";
import { Bridge } from "@bonfire-xmpp/apibridge";
import type { API, Events } from "@bonfire-xmpp/core";

const apiWorker = new Worker(new URL("@/api.worker.ts", import.meta.url));
const api = new Bridge<API, Events>();
apiWorker.onmessage = (e: MessageEvent) => api.feed(e.data);
api.onsend = (mesg: Array<unknown>) => apiWorker.postMessage(mesg);

const app = createApp(App);
app.use((app) => {
  app.config.globalProperties.$api = api;
});
app.mount("#app");
