# vscode vue 配置路径别名

1、在项目文件夹下新建`vue.config.js`文件

2、在`vue.config.js`文件中配置如下代码

```javascript
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets"
            }
        }
    }
}
```

