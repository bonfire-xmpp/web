import { createApp } from "vue";
import App from "@/App.vue";
import bridge from "@bonfire-xmpp/core/src/index.view";

const apiWorker = new Worker(new URL("@/api.worker.ts", import.meta.url));
apiWorker.onmessage = (e: MessageEvent) => bridge.feed(e.data);
bridge.onsend = (mesg: Array<unknown>) => apiWorker.postMessage(mesg);

const app = createApp(App);
app.use((app) => {
  app.config.globalProperties.$api = bridge;
});
app.mount("#app");
