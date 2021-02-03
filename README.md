# @marlonmarcello/vite-plugin-pug

**NOTE:** Discontinued, please see https://github.com/vitejs/vite/issues/1861#issuecomment-772746928
-----------------------
This plugin adds support for the [Pug](https://pugjs.org/) template engine to [Vite](https://vitejs.dev/).

### Install

```
npm install --save-dev @marlonmarcello/vite-plugin-pug
```

### Usage

Add `@marlonmarcello/vite-plugin-pug` to your [Vite config file](https://vitejs.dev/config/):

```js
// vite.config.js
import vitePluginPug from "@marlonmarcello/vite-plugin-pug";

export default {
  plugins: [vitePluginPug()],
};
```

### Options

You can pass all default [Pug Options](https://pugjs.org/api/reference.html#options) plus:

- `data: object` - Any data that you would like available globaly to templates

### Example

```js
import vitePluginPug from "@marlonmarcello/vite-plugin-pug";

export default {
  plugins: [
    vitePluginPug({
      data: {
        meta: {
          title: "My awesome website",
        },
      },
    }),
  ],
};
```

```pug
doctype html
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title!=meta.title
  body
    //- template
```
