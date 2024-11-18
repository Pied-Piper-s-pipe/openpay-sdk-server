# Build stage
FROM node:19.6.0-alpine AS base

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN rm -rf .node_modules
RUN npm install -g pnpm
RUN pnpm install --no-cache

COPY . .

RUN pnpm prisma:gen:backend

# Backend 构建阶段
FROM base AS backend-builder
RUN pnpm prisma:gen:backend
RUN pnpm run build backend

# gateway 构建阶段
FROM base AS gateway-builder
RUN pnpm run build gateway

# cron 构建阶段
FROM base AS cron-builder
RUN pnpm run build task-scheduler


EXPOSE 3300

CMD ["npx", "run", "start:prod"]
