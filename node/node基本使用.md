**在node中执行js代码：**

node加空格加js文件路径

**终端快捷键：**

上方向键：快速定位至上次命令；

tab键：快速补全路径；

esc：快速清空已输入命令；

cls：清空终端；

**文件读取fs.readFile模块**

``` 
const fs = require('fs');
//（文件路径，编码格式，回调函数）
fs.readFile('./hhh.txt', 'utf8', function (err, dataStr) {
    console.log(err);
    console.log(dataStr);
})
```

**判断文件是否读取成功**

​	如果文件读取成功，err等于null；

``` 
 if (err) {
        console.log('读取文件失败' + err.message);
    }
    console.log('读取文件成功！' + dataStr);
```

**写入文件内容** **(fs.writeFile模块)**

``` 
fs.writeFile('./hhh.txt', 'hello node', function (err) {
    // 如果写入成功，则返回null
    console.log(err);
})
```

在使用fs模块操作文件时，如果提供的是相对路径，很容易出现路径动态拼接错误的问题；因为在运行的时候，会以执行node所处的目录，动态拼接出被操作文件的完整路径；

解决办法：

- 使用完整路径
- __dirname：表示当前文件所处的目录
- path.join()

**path模块**：用来处理路径的模块

- path.join()：将多个路径片段拼接成完整的路径字符串;
- path.basename()：从路径字符串中，将文件名解析出来;若加上扩展名，则扩展名将被移除；
- path.extname()：获取路径中的文件扩展名；

**http模块**

* ip地址：用于标识一台主机（计算机）
* 域名：和IP地址成一一对应的关系
* DNS：解析域名，得到对应的ip地址
* 端口号：表示计算机上的每一个web服务
* MAC地址：又叫物理地址，每一个网卡都有一个mac地址，全球唯一

创建最基本的web服务器

* 导入http模块
* 创建server实例
* 为server绑定request事件，监听客户端请求
* 启动服务器
* 本地服务器地址：127.0.0.1:80

``` 
const http = require('http')
const server = http.createServer();
server.on('request', (req, res) => {
    console.log('someone is visiting our web server');
})
server.listen(80, function () {
    console.log('服务器启动成功');
})
```

req请求对象：存放客户端相关的数据或属性

- req.url：客户端请求的url地址；
- req.method：客户端的method请求类型；

res响应对象：存放服务器相关的数据或属性

* res.end：向客户端发送一些内容，且结束这次请求的处理过程；

解决中文乱码的问题：

``` 
 const str = '你本次访问服务器成功';
 res.setHeader('Content-Type','text/html;charset=utf-8');
 res.end(str);
```

**模块化**

当使用require加载其它模块时，会执行被加载模块中的代码

可以省略后缀名

**模块作用域**

在模块中定义的变量、方法等，只能在当前模块内被访问

模块作用域：防止全局变量污染

**向外共享模块作用域中的成员**

module：当前模块对象，保存了一些当前模块的信息

module.exports = {}：向外共享成员

exports === module.exports

require得到的永远是module.exports对象

**使用淘宝镜像**

npm config get registry

npm config set registry=http://registry.npm.taobao.org/ 

**nrm：快速查看和切换包的镜像源**

* npm i nrm -g
* nrm ls
* nrm use taobao

npm i 包名 -D：开发时依赖

npm i 包名：核心依赖包

npm i 包名 -g：全局安装

i5ting_toc：把md转为html页面的工具：`i5ting_toc -f 文件路径 -o`

**封装一个自己的包**

* 新建一个文件夹
* 建index.html文件
* 建package.json文件
* 建readme.md文件

**模块的加载机制**

* 模块在第一次加载后会被缓存，所以多次调用require不会导致模块的代码被执行多次
* 模块会优先从缓存中加载，从而提高模块的加载效率
* 内置模块的加载优先级最高
* 加载自定义模块需要给路径，否则会被当成内置模块
* 若省略文件名，则node会尝试按顺序添加：.js / .json / .node
* 若require的模块标识符不是内置模块，也不是自定义模块，则会尝试从/node_modules文件夹中加载第三方模块；如果没有找到对应的第三方模块，则会移动到上一层父目录中，直到文件系统根目录

**目录作为模块**

当把目录作为模块标识符。传给require进行加载时，有如下三种加载方式

* 在当前目录下找package.json文件，寻找main属性，作为require加载的入口
* 如果没有package.json或找不到main属性，会尝试加载目录下的index.js文件
* 若失败，打印错误信息

