## Node.js

#### 参考

* [cnode.js 狼叔](https://cnodejs.org/topic/5ab3166be7b166bb7b9eccf7)

#### 概念
* 2009年，Ryan Dahl(RD)开发，2015 Node 基金会成立（Google, IBM, Microsoft, linux)；
* Node.js 是基于 Google V8引擎 的 JavaScript 运行平台/环境；
* Node.js 事件驱动I/O服务端，文件读写，数据库操作；
* Node.js 微服务、Web服务器开发、前端工具构建；

#### 应用场景及范围

* 开发低延迟的网络应用(API，即时IM)

#### 优缺

* 生态良好，NPM 管理器拥有60万个模块(2018年)，32亿次/week downloads(2018年)
* 采用事件驱动，适合IO密集的应用(非阻塞)；
* 适合IO密集型，则适合数据密集型（内存小，响应力快）
* 不适合CPU密集的任务；

#### 安装
* 使用安装包安装：http://www.runoob.com/nodejs/nodejs-install-setup.html
* 使用 `node -v` 查看版本

#### 概念
/**
 * 异步编辑的直接体现是回高，但不能说有回调就是异步化。
 * ** Node 使用了大量的回调函数，所有的 Node Api 都支持回调函数
 * ** 这就是 Node 之一的魅力所在了，Node 虽然是单线程的，但是执行代码时没有阻塞或等待文件I/O操作，可处理大量的并发请求
 *
 * Node 是单进程单线程应用程序，但可以通过事件与回调处理并发，提高性能
 * Node 每一个Api 都是异步的，使用异步函数调用，处理并发
 * ** 所有的事件机制都是用设计模式中的观察者模式实现
 * **
 */