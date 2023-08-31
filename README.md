<h1 align="center">vue-view-loading3</h1>

## 介绍
页面状态管理组件 vue3 版本

## 必要环境
Vue.js >=3.3.4

## 安装

```
npm install vue-view-loading3
```

## 使用

- 全局注册

```
import Vue from 'vue'
import VueViewLoading from 'vue-view-loading3'

Vue.use(VueViewLoading)
```

- 组件使用

```
<view-loading :fetch="getDetail">
  // 页面内容
</view-loading>
```

- 局部注册

```
import ViewLoading from 'vue-view-loading3'

export default {
  components: {
    ViewLoading
  },
  // ...
}
```

- 组件使用

> 注：局部注册时组件名可以自定义，全局注册时组件名为默认 ViewLoading

```
<view-loading :load="getDetail">
  // 页面内容
</view-loading>
```

## API

### props

- fetch(Function)

  必需，该方法接收一个异步函数，执行函数后结束loading状态，不处理成功失败状态

### slot

- default

  默认插槽，页面内容，success 状态渲染

- loading

  加载效果，loading 状态渲染

- fail

  失败效果，fail 状态渲染
