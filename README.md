# Sentinel 系统

Sentinel 是一个完整的前后端分离系统，包含 Vue.js 前端和 FastAPI 后端。

## 系统架构

- **sentinel_frontend**: 基于 Vue 3 + TypeScript + Vite 的前端应用
- **sentinel_backend**: 基于 FastAPI 的 Python 后端服务

## 环境要求

### 前端
- Node.js 16+
- npm 或 yarn

### 后端
- Python 3.8+
- MySQL 数据库

## 安装指南

### 后端设置

1. 进入后端目录
```bash
cd sentinel_backend
```

2. 创建虚拟环境
```bash
conda create -n sentinel_backend python=3.8
conda activate sentinel_backend
```

3. 安装依赖
```bash
pip install -r requirements.txt
```

4. 配置数据库连接信息

5. 启动后端服务
```bash
python run.py
```

服务将在 `http://192.168.1.53:8001` 上运行。

### 前端设置

1. 进入前端目录
```bash
cd sentinel_frontend
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

4. 构建生产版本
```bash
npm run build
# 或
yarn build
```

## 使用指南

### 后端 API 文档

启动后端服务后，可以通过以下链接访问 API 文档：

- Swagger UI: `http://192.168.1.53:8001/docs`
- ReDoc: `http://192.168.1.53:8001/redoc`

### 主要功能

1. **用户管理**
   - 用户注册与登录
   - 权限管理
   - 用户信息维护

2. **任务处理**
   - 创建任务
   - 查看任务状态
   - 任务结果分析

3. **系统监控**
   - 性能指标监控
   - 错误日志查看

## 项目结构

### 前端结构
```
sentinel_frontend/
├── src/               # 源代码目录
│   ├── assets/        # 静态资源
│   ├── components/    # 组件
│   ├── views/         # 页面
│   ├── router/        # 路由配置
│   ├── store/         # 状态管理
│   └── api/           # API请求封装
├── public/            # 公共文件
└── vite.config.ts     # Vite配置文件
```

### 后端结构
```
sentinel_backend/
├── app/               # 主应用目录
│   ├── api/           # API路由
│   ├── core/          # 核心功能
│   ├── databse/       # 数据库模型和操作
│   └── schemas/       # 数据模式定义
├── utils/             # 工具函数
├── requirements.txt   # 项目依赖
└── run.py             # 应用入口
```

## 开发说明

### 前端开发

1. 组件开发遵循 Vue 3 组合式 API 的最佳实践
2. 使用 TypeScript 进行类型检查
3. 使用 Vite 作为构建工具

### 后端开发

1. 遵循 FastAPI 的 API 设计规范
2. 使用 SQLAlchemy 进行数据库操作
3. 遵循 RESTful API 设计原则

## 部署指南

### 前端部署

构建产品：

```bash
cd sentinel_frontend
npm run build
```

将 `dist` 目录部署到 Web 服务器（如 Nginx）。

### 后端部署

对于生产环境，建议使用 Gunicorn：

```bash
cd sentinel_backend
pip install gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app:create_app
```

## 常见问题

1. **问题**: 前端无法连接后端 API
   **解决方案**: 检查 API 地址配置和跨域设置

2. **问题**: 后端服务启动失败
   **解决方案**: 检查数据库连接和依赖安装

## 联系方式

如有问题，请联系系统管理员或开发团队。 