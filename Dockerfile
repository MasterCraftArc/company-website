FROM node:latest as builder 


WORKDIR /app

COPY . .

RUN rm -rf -- ./node_modules && rm -f -- package-lock.json

RUN npm i && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=builder /app/public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
