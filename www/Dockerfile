FROM node:latest as build-stage
WORKDIR /www
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80

FROM nginx:latest as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /www/build /usr/share/nginx/html



CMD ["nginx", "-g", "daemon off;"]