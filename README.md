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

# 快照1 项目框架设定
1. 路由设定
一级路由：Layout、New
二级路由：Layout/month、Layout/year

2. 组件库设定
src\theme.css设置主题色

3. Redux设定
src\store\modules\billStore.js与src\store\index.js

# 快照2 Tab标签实现
1. 安装sass依赖：`npm i -D sass`
2. 完成静态tab样式：
https://mobile.ant.design/zh/components/tab-bar
3. 结合路由展示对应组件

# 快照3 月度账单页面
# 快照3.1 统计区域
1. 统计区域静态结构
2. 统计区域功能需求

## 功能实现
1. 点击打开时间选择弹框
2. 点击取消/确认按钮以及蒙层区域都可以关闭弹框
3. 弹框关闭时箭头朝下，打开是箭头朝上
4. 点击确定修改时间
5. 统计区域根据时间筛选账单展示数据
6. 初始化展示当月数据

# 3.2 单日统计列表
1. 单日统计列表静态结构
2. 单日统计列表功能需求

## 功能实现
1. 把当前月的账单数据以单日为单位进行统计显示
2. 把单日的账单列表渲染到视图中
3. 箭头控制账单列表的展开与折叠

# 快照4 新增账单
# 快照4.1 新增账单静态结构
1. 新增账单静态结构
2. 利用src\contants\index.js进行中文转换

# 快照4.2 新增账单功能需求
1. 准备控制支出收入的状态
2. 点击按钮切换状态
3. 适配按钮样式
4. 适配数据显示
5. 添加新增功能
6. 完善用户体验
