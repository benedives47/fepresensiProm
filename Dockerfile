FROM node:20.10.0-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
EXPOSE 5000
RUN npm run dev
