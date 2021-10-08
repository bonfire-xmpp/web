import bridge from "@bonfire-xmpp/core";

const ctx = self as unknown as Worker;

ctx.onmessage = (e: MessageEvent) => bridge.feed(e.data);
bridge.onsend = (mesg: Array<unknown>) => ctx.postMessage(mesg);
