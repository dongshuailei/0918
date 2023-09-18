const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.zzgoodqc.cn/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
