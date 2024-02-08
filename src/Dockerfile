# Этап сборки приложения
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Этап упаковки приложения
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

CMD ["node", "server.js"]
