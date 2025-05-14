在过往项目中我参与并设计过前端项目的 CI/CD（持续集成 / 持续部署）流程，目标是实现自动化构建、测试和部署，提升开发效率和交付质量。下面我结合 Vue 和 React 项目，分步骤详细讲讲我做过的 CI/CD 流程设计。

---

## ✅ 一、CI/CD 流程的整体目标

* **CI（持续集成）**：代码提交后自动执行构建、代码检查、测试等流程
* **CD（持续部署）**：构建成功后自动部署到测试 / 预发 / 生产环境

---

## ✅ 二、使用到的工具栈（以主流场景为例）

| 阶段    | 工具                                   |
| ----- | ------------------------------------ |
| 代码托管  | GitLab / GitHub                      |
| CI 引擎 | GitLab CI / GitHub Actions / Jenkins |
| 构建工具  | Vite / Webpack / Docker              |
| 测试    | ESLint、Vitest / Jest、Playwright      |
| 发布部署  | SCP、rsync、K8s、Nginx、OSS/CDN          |

---

## ✅ 三、具体流程拆解

### 🧪 1. 开发者提交代码 → 触发 CI

* 监听 `main` / `dev` 分支的 Push / MR 请求
* 自动触发 Pipeline

### 🔧 2. CI 阶段：代码检查 + 构建 + 单元测试

```yaml
# 示例：GitLab CI .gitlab-ci.yml 片段
stages:
  - lint
  - test
  - build
  - deploy

lint:
  stage: lint
  script:
    - npm ci
    - npm run lint

test:
  stage: test
  script:
    - npm run test

build:
  stage: build
  script:
    - npm run build
  artifacts:
    paths:
      - dist/
```

**说明：**

* `npm ci` 保证一致性构建
* 使用 ESLint 做代码风格校验
* Jest / Vitest 进行单测
* 构建产物缓存至 `dist/`

---

### 🚀 3. CD 阶段：自动部署

**方案 A：使用 SSH 自动上传产物**

```yaml
deploy:
  stage: deploy
  only:
    - main
  script:
    - scp -r dist/* user@host:/var/www/project/
```

**方案 B：使用 Docker + K8s + Helm**

* 构建 Docker 镜像，推送至私有仓库
* 通过 Helm 滚动部署到预设环境

```yaml
script:
  - docker build -t registry/project:latest .
  - docker push registry/project:latest
  - helm upgrade project ./chart/ --set image.tag=latest
```

---

## ✅ 四、补充优化项

| 功能      | 描述                                        |
| ------- | ----------------------------------------- |
| 自动化预览环境 | PR 提交后部署临时环境，支持设计、测试人员预览                  |
| 构建缓存加速  | 利用 pnpm、turbo、GitLab CI cache 减少构建时间      |
| 提交校验    | husky + lint-staged，本地 pre-commit 阶段防问题提交 |
| 多环境配置   | 根据 ENV 自动切换 API 地址、埋点、日志收集等               |
| 构建版本标记  | 注入版本号、Git commit hash，用于线上问题定位            |

---

## ✅ 五、实际结果

* 从提交代码到上线平均缩短 50% 时间
* 测试/产品/运维可以快速验证 PR/版本
* 发布回滚更安全（保留历史构建版本）
* 多人协作部署问题大幅减少

---