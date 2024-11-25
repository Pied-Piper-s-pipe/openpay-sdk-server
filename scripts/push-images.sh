#!/bin/bash

# 读取 .docker.env 文件中的环境变量
if [ -f ../.docker.env ]; then
    export $(cat ../.docker.env | xargs)
else
    echo ".docker.env file not found!"
    exit 1
fi

# 检查必需的环境变量
if [ -z "$DOCKER_USERNAME" ] || [ -z "$DOCKER_REGISTRY" ] || [ -z "$DOCKER_PASSWORD" ]; then
    echo "Please set DOCKER_USERNAME, DOCKER_REGISTRY, and DOCKER_PASSWORD in .docker.env"
    exit 1
fi

DOCKER_COMPOSE_FILE="../docker-compose.production.yml"

# 使用 docker-compose 构建镜像，指定目标和标签
docker-compose -f "$DOCKER_COMPOSE_FILE" build 

# 登录到 Docker Hub
echo "$DOCKER_PASSWORD" | docker login "$DOCKER_REGISTRY" -u "$DOCKER_USERNAME" --password-stdin

# 推送镜像到 Docker Hub
docker push $DOCKER_REGISTRY/sn/openpay/sdk/gateway
docker push $DOCKER_REGISTRY/sn/openpay/sdk/backend
docker push $DOCKER_REGISTRY/sn/openpay/sdk/cron
docker push $DOCKER_REGISTRY/sn/openpay/sdk/migrate
docker push $DOCKER_REGISTRY/sn/openpay/sdk/seeds

# 退出 Docker 登录
docker logout