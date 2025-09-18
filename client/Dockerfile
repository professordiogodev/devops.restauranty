# Build stage
FROM node:20-alpine AS build
WORKDIR /app
ARG REACT_APP_API_URL=http://localhost
ENV REACT_APP_API_URL=${REACT_APP_API_URL}
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve stage
FROM nginx:1.27-alpine
# SPA routing: send unknown paths to index.html
RUN printf "server {\n  listen 80;\n  server_name _;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / {\n    try_files \$uri /index.html;\n  }\n}\n" > /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
