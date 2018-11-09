
# To start

Install [nodejs](http://nodejs.cn/download/) environment.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm run dev

# build for production with minification
npm run build

```

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli)

# Folder structure
* build - webpack config files
* config - webpack config files
* dist - build
* src -webapps
    * api
    * assets
    * common
    * components - vue components
    * mock
    * styles
    * views - view pages
    * vuex
    * chart
    * App.vue
    * main.js - main file
    * routes.js
* static - static assets

# Theme
You can change theme by 
1. Generate theme packages by [https://elementui.github.io/theme-chalk-preview/#/zh-CN](https://elementui.github.io/theme-chalk-preview/#/zh-CN)
2. Put theme packages in src/assets/theme/
3. Edit src/main.js 
``` bash
   import 'element-ui/lib/theme-default/index.css'
   to
   import './assets/theme/your-theme/index.css'
```
4. Edit src/styles/vars.scss

# Browser support

Modern browsers and IE 10+.

# License
[MIT](http://opensource.org/licenses/MIT)
