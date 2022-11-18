# Element-plus 源码学习

## 项目搭建

###### 项目安装

```bash
npm init vite@latest element-plus -- --template vue-ts
```

###### 组件注册原理

1. 先完成组件内容的编写

components/button/src/index.vue

2. 编写 install 方法

```ts
// components/button/index.ts
export default (app: App) => {
  // 这里使用的组件选项中的name作为组件名
  app.component(Button.name, Button)
}
```

3. 编写全局 install 方法

```ts
// component.ts
export installAll = (app) => {
  ButtonInstall(app)
}
// index.ts
installAll(app)
```

###### 提交规范

1. 安装插件

```bash
yarn add cz-conventional-changelog --dev
```

2. 配置

```json
// package.json
"config": {
 "commitizen": {
   "path": "./node_modules/cz-conventional-changelog"
 }
}
```
