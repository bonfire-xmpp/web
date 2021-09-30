/* eslint-disable */
declare module "*.worker.ts" {
  export default class WebpackWorker extends SharedWorker {
    constructor();
  };
};