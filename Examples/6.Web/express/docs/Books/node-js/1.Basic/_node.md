## Node

#### 概念
* Node.js 基于 Chrome JavaScript 运行时建立的一个平台
* Node.js 事件驱动I/O服务端 JavaScript 环境，基于 Google V8引擎

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