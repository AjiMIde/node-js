https://www.npmjs.com/package/socket.io
https://socket.io/docs/

#### socket.io
* 支持实时的、双向的，基于事件的通信
* 包含了一个 Node.js 服务端的插件及 Client 客户端的插件

#### 可靠性

* 无视任何代理及负载平衡
* 无视各种防火墙和杀毒软件
* 基于上面的目标，socket.io基于 Engine.io 进行开发的，它会先进行一个长轮询的链接，然后
* 试图升级到更可靠（更好）的协议，如 webSocket

* 客户端除非是主动断开，否则 socket.io 能进行不断的自动重连

* 基于 Engine.IO 来建立心跳机制，能使得服务器和客户端都知道对方什么时候不再响应
* socket.io能允许你创建多个命名空间，来作为单独的通信信道，但它们都共享相同的底层连接
* 



