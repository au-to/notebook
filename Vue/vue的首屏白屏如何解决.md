1. 路由懒加载
2. vue-cli开启打包压缩，后台配置gzip访问
3. 开启CDN加速
4. 开启vue服务端渲染
5. 用webpack的externals属性把不需要打包的库文件分离出去，减小打包后的文件体积
6. 在生产环境中删掉不必要的console.log
7. 开启nginx的gzip ,在nginx.conf配置文件中配置
8. 添加loading效果，给用户一种进度感受