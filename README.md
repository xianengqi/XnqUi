# XnqUi

## 开发
> 全局引入 -- 在 webpack 入口文件 main.js 中如下配置：

``` bash
# 安装
npm i xna --save

# 引入css
import './package/XnqUi.min.css'

# 引入xmui.min.js
import XnqUi from './package/XnqUi.min.js'

# 注入到vue
Vue.use(XnqUi)
```

> 按需引入 -- 在 入口文件 main.js 或 组件内 中如下配置：

``` bash
# 全局组件 main.js引入
import Toast from 'x-m-ui/package/comps/components/toast'
Vue.prototype.$toast = Toast

# 一般组件
import xmButton from 'x-m-ui/package/comps/components/button'
import xmButtonGroup from 'x-m-ui/package/comps/components/buttongroup'
...

components: {
    xmButton,
    xmButtonGroup,
    ...
}
```
