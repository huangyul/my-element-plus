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
  app.component(Button.name, Button);
};
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

###### lerna

先全局安装 lerna

`npm i leran -g`

在 package.json 配置

```json
{
  "workspaces": ["packages/*"]
}
```

###### 安装子包的依赖

有文件结构如下，有一个子包 button

my-element-plus
├── README.md
├── index.html
├── lerna-debug.log
├── lerna.json
├── package.json
├── packages
│ └── button
├── public
│ └── vite.svg
├── scripts
├── src
│ ├── App.vue
│ ├── assets
│ ├── component.ts
│ ├── components
│ ├── main.ts
│ ├── router.ts
│ ├── style
│ └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock

例如现在有一个子包 `button`，需要依赖 `jest`，`ts-jest` 等，而主包不需要，这时候想要给子包安装依赖，可以使用以下命令

```bash
lerna add dependency --scope=packageName
```

说明：

1. `dependency` 是指依赖包名，例如`jest`
2. `packageName` 是指要给那个子包安装，该值引用的是子包内 `package.json` 的 `name` 字段
3. 如果需要安装到`dev`，则加上参数 `--dev`
4. `learn bootstrap`该命令的作用是安装所有 packages 的依赖项并且连接本地包的交叉依赖项。
