**style-loader**

* 用于将`css`编译完成的样式，挂载到页面`style`标签上。需要注意loader执行顺序，style-loader放到第一位，因为loader都是从下往上执行，最后全部编译完成挂载到style上

**css-loader**

* 用于识别`.css`文件, 处理`css`必须配合`style-loader`共同使用，只安装`css-loader`样式不会生效。

**sass-loader**

* `css`预处理器，我们在项目开发中经常会使用到的，编写`css`非常便捷，一个字 "棒"。

**postcss-loader**

* 用于补充css样式各种浏览器内核前缀

**babel-loader**

* 将Es6+ 语法转换为Es5语法
* babel-loader 这是使babel和webpack协同工作的模块
* @bable/core 这是babel编译器核心模块
* @babel/preset-env 这是babel官方推荐的预置器，可根据用户的环境自动添加所需的插件和补丁来编译Es6代码

**ts-loader**

* 用于配置项目typescript

**html-loader**

* 我们有时候想引入一个`html`页面代码片段赋值给`DOM`元素内容使用，这时就用到`html-loader`

**file-loader**

* 用于处理文件类型资源，如`jpg`，`png`等图片。返回值为`publicPath`为准。

**url-loader**

* `url-loader`也是处理图片类型资源，只不过它与`file-loader`有一点不同，`url-loader`可以设置一个根据图片大小进行不同的操作，如果该图片大小大于指定的大小，则将图片进行打包资源，否则将图片转换为`base64`字符串合并到`js`文件里

**html-withimg-loader**

* 我们在编译图片时，都是使用`file-loader`和`url-loader`，这两个`loader`都是查找`js`文件里的相关图片资源，但是`html`里面的文件不会查找，如果我们`html`里的图片也想打包进去，这时使用`html-withimg-loader`

**eslint-loader**

* 用于检查代码是否符合规范，是否存在语法错误

