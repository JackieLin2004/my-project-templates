# My Project Templates

## 前后端分离项目模版

***

### 本项目采用了 `Springboot3` + `Vue3` 框架来实现前后端分离项目

### 主要包含注册、登录和密码重置的功能，可以在此基础上增加对应的业务需求

### 后端技术栈

- 采用 `Mybatis-Plus` 作为持久层框架，使用更加便捷


- 采用 `Redis` 存储注册和重置操作的验证码，并带过期时间限制


- 采用 `Redis` 进行IP地址限流处理，防刷接口


- 采用 `RabbitMQ` 积压短信发送任务，再由监听器统一处理


- 采用 `SpringSecurity` 作为权限校验框架，同时整合 `Jwt` 校验方案


- 视图层对象和数据层对象分离，编写工具方法利用反射快速互相转换


- 错误和异常页面统一采用JSON格式返回，前端处理响应更统一


- 手动处理跨域，采用过滤器实现

### 前端技术栈

- 采用 `Vue-Router` 作为路由


- 采用 `Axios` 作为异步请求框架


- 采用 `Element-Plus` 作为UI组件库


- 使用 `VueUse` 适配深色模式切换


- 使用 `unplugin-auto-import` 按需引入，减少打包后体积

### 学习参考 [柏码itbaima.cn](https://www.itbaima.cn/)
