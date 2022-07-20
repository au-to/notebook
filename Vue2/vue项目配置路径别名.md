# vscode vue 配置路径别名

1、在`vue.config.js`文件中配置如下代码

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

2、在jsconfig.json文件中添加如下配置

``` 
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

