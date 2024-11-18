#!/bin/bash

pnpm store prune
rm -rf node_modules pnpm-lock.yaml
pnpm install