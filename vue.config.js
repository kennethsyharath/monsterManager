module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      preload: {preload: "src/preload/ipcPreload.ts"}
    }
  }
};