Webpack 和 Vite 都有一套完整的构建流程，但优化方式有所不同，我们可以从**构建速度**、**产物体积**和**开发体验**三个维度来讲。下面我会先分别讲解 Webpack 和 Vite 的优化策略，然后对比两者的异同。

---

## ✅ 一、Webpack 构建优化策略

Webpack 构建优化可以从以下几个方面入手：

### ⏱ 构建速度优化（开发体验）

1. **开启缓存**

   * `cache: { type: 'filesystem' }`，提升二次构建速度
   * Babel 也支持 `cacheDirectory: true`

2. **使用 `thread-loader` / `parallel`**

   * 利用多线程处理 babel、ts、sass 等重型 loader

3. **缩小打包范围**

   * 使用 `include` / `exclude` 限制 loader 处理范围

4. **使用 alias 减少解析路径**

   ```js
   resolve: {
     alias: { '@': path.resolve(__dirname, 'src') }
   }
   ```

5. **HMR 热更新配置正确**

   * 开启 `devServer.hot: true`
   * 避免全量刷新页面

---

### 📦 产物体积优化（上线性能）

1. **Tree Shaking**

   * 只导入/打包实际使用的模块（注意要用 ESModule）

2. **SplitChunks 拆包**

   ```js
   optimization: {
     splitChunks: {
       chunks: 'all'
     }
   }
   ```

3. **externals 排除 CDN**

   ```js
   externals: {
     react: 'React',
     'react-dom': 'ReactDOM'
   }
   ```

4. **开启 Terser 压缩**

   * `mode: 'production'` 自动启用压缩、丑化

5. **图片压缩、字体压缩、资源压缩**

   * 使用 `image-webpack-loader`、`url-loader` 等

---

## ✅ 二、Vite 构建优化策略

Vite 构建基于 ESModule 和 Rollup，天然具备更快的启动速度，但也可以进一步优化：

### ⏱ 开发体验优化

1. **使用缓存机制**

   * Vite 会自动缓存依赖，可通过 `optimizeDeps` 配置预构建

2. **按需自动导入（如 unplugin-auto-import）**

   * 减少手写 import，优化 DX

3. **合理使用插件数量**

   * 插件多会拖慢 cold start，需要精挑细选

---

### 📦 构建产物优化（Rollup）

1. **Rollup 构建拆包**

   * 配置 `build.rollupOptions.output.manualChunks` 控制拆包策略

2. **cdn 引入公共库**

   ```js
   build: {
     rollupOptions: {
       external: ['vue', 'axios']
     }
   }
   ```

3. **压缩工具**

   * 开启 `build.minify: 'esbuild'`（默认使用 esbuild，非常快）

4. **静态资源压缩**

   * 使用 `vite-plugin-compression` 生成 `.gz` 或 `.br`

5. **缓存策略**

   * 使用 hash 命名、合理设置 HTTP 缓存策略（配合 nginx）

---

## 🔁 三、Webpack vs Vite 构建优化对比

| 方面    | Webpack                         | Vite                          |
| ----- | ------------------------------- | ----------------------------- |
| 启动速度  | 慢（依赖打包）                         | 快（原生 ESM + 预构建缓存）             |
| 构建优化点 | 多线程、缓存、Tree Shaking、SplitChunks | Rollup 拆包、cdn 外部引入、esbuild 压缩 |
| 插件生态  | 成熟全面                            | 新兴中，依赖社区插件                    |
| 使用门槛  | 配置复杂                            | 零配置上手，简单直观                    |

---

## ✅ 总结一句话：

> Webpack 优化更注重“编译性能+产物拆包精细控制”，而 Vite 优化偏向“轻量、高速开发和构建”，但两者在生产构建阶段都依赖 Rollup 的 Tree Shaking 和模块合并能力。

---