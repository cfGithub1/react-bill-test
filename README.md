# 项目介绍
这是一个简单的记账本项目，使用React和Redux构建，并集成了react-router-dom、dayjs、classnames、antd-mobile和axios等库。

# 项目配置
1. 项目初始化 `npx create-react-app react-bill-test`
2. 安装Redux `npm i @reduxjs/toolit react-redux`
https://cn.redux.js.org/tutorials/quick-start
3. 安装路由 `npm i react-router-dom`
4. 安装时间处理 `npm i dayjs`
https://dayjs.fenxianglu.cn/category/parse.html
5. 安装class类名处理 `npm i classnames`
6. 安装移动端组件库 `npm i antd-mobile`
https://mobile.ant.design/zh/components/button
7. 安装axios `npm i axios`
https://www.axios-http.cn/docs/example

# 快照0 项目初始化
1. src目录下只保留APP.js、index.js并修改其中的内容
2. 别名路径配置
- 路径解析配置(webpack),把@/解析为src/
CRA本身把webpack配置包装到了黑盒里无法直接修改，需要借助一个插件-craco
https://craco.js.org/docs/getting-started/
配置步骤:
I. 安装craco `npm i -D @craco/craco`
II. 项目根目录下创建配置文件craco.config.js
III. 配置文件中添加路径解析配置
IV. 包文件中配置启动和打包命令
- 路径联想配置(VsCode),VsCode在输入@/时，自动联想出来对应的src/下的子级目录。
配置步骤:
I.根目录下新增配置文件- jsconfig.json
II.添加路径提示配置
3. json-server实现数据Mock
- 什么是数据Mock:
在前后端分类的开发模式下，前端可以在没有实际后端接口的支持下先进行接口数据的模拟，进行正常的业务功能开发
- json-server是一个node包，可以获得零编码的完整的Mock服务
实现步骤:
I.项目中安装json-server `npm i -D json-server`
II.准备一个json文件  server\data.json
III.添加启动命令

