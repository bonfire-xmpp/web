import { Bridge } from "@bonfire-xmpp/apibridge";
import core, { API, Events } from "@bonfire-xmpp/core";

const ctx = self as unknown as Worker;

const bridge = new Bridge<unknown, unknown, API, Events>();

bridge.define({
  ...core({ bridge }),
});

ctx.onmessage = (e: MessageEvent) => bridge.feed(e.data);
bridge.onsend = (mesg: Array<unknown>) => ctx.postMessage(mesg);
