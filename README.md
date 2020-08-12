# auto-template-android

auto.pro 带 UI 的 webpack 模板

## 使用

1. 首次使用需要安装 npm 包：vscode 控制台下执行`npm i`。

2. 安装完毕后，执行`npm run build`或`npm start`编译源文件。

3. 连接设备

4. `F1`打开 vscode 命令，选择`运行项目`或输入`Pro Run Project`来运行项目。

## 说明

-   如果界面模板不含有`{{}}`绑定的话，可以直接通过`files.read`加载文件夹内的`xml`文件。
-   如果要使用`{{}}`功能，需要使用字符串模板，即将 xml 内容用`` ` ``号包起来，此时可以使用 JS 的`${}`来替代`{{}}`。
-   UI 文件需要在`webpack.config.js`->`plugin`->`new AutoProWebpackPlugin({ui: []})`里指定，与`webpack.config.js` -> `entry`的键名对应。
-   默认项目入口为`dist/app.js`，该入口由`src/index.js`编译生成

## 友情提示

1. 修改了`webpack.config.js`的话，`npm start`需要重新执行才能使配置生效。
2. 模板是为了方便的压缩、组织代码，以及使用 npm 包。如果您觉得一些文件不需要上述功能，可直接在`src`外照常写文件。

# LICENSE

MIT.
