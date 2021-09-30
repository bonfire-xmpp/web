/* eslint-disable */
import type { Bridge } from "@bonfire-xmpp/apibridge";
import type { API, Events } from "@bonfire-xmpp/core";

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $api: Bridge<API, Events>;
  };
}