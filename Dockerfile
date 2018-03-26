FROM node:9.9-alpine AS builder
ADD / /frontend
WORKDIR /frontend
RUN npm i && npm run build

FROM nginx:1.13-alpine

COPY --from=builder /frontend/dist/* /usr/share/nginx/html

EXPOSE 80
