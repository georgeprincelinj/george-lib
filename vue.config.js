const path = require("path");
module.exports = {
  runtimeCompiler: true,
  // chainWebpack: (config) => {
  //   config.resolve.symlinks(false),
  //   config.resolve.alias.set('vue$',path.resolve(__dirname,'node_modules/vue/dist/vue.esm.bundler.js'))
  // }
};
