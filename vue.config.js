// eslint-disable-next-line @typescript-eslint/no-var-requires
const Path = require("path");
const { ProvidePlugin } = require("webpack");

module.exports = {
  transpileDependencies: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        Path.resolve(__dirname, "./src/assets/_mixins.scss"),
        Path.resolve(__dirname, "./src/assets/_sizes.scss"),
        Path.resolve(__dirname, "./src/assets/_baseColors.scss"),
      ],
    },
  },
  chainWebpack: config => {
    config
      .plugin("webpack-provide")
      .use(ProvidePlugin, [{
        Buffer: ["buffer", "Buffer"],
        process: "process/browser.js"
      }])

  },
};
