const pug = require("pug");

const fileRegex = /\.(pug)$/;

module.exports = function vitePluginPug(userOptions = {}) {
  const data = userOptions.data || {};
  const pugOptions = userOptions.pugOptions || {};

  return {
    name: "vite-plugin-pug",
    enforce: "pre",

    // transform(src, id) {
    //   if (fileRegex.test(id)) {
    //     const fn = pug.compile(src, pugOptions);

    //     return {
    //       code: fn(src),
    //     };
    //   }
    // },

    transformIndexHtml(html, { filename }) {
      // by industry standards, if a file starts with
      // underscore, it should be ignored
      if (fileRegex.test(filename) && !filename.startsWith("_")) {
        const fn = pug.compile(html, pugOptions);

        return fn(data);
      }
    },
  };
};
