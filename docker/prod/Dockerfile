# --- Build Stage ---
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Only copy package.json & lockfile first
COPY ../../package.json ../../pnpm-lock.yaml ./

# Install dependencies first (will cache unless package.json changes)
RUN pnpm install --frozen-lockfile

# Now copy only the build-related configs
COPY ../../tailwind.config.js ../../postcss.config.js ../../rspack.build.prod.js ../../tsconfig.json ./

# Copy actual source code AFTER npm install to keep layer cache
COPY ../../src ./src
COPY ../../public ./public

# Build the frontend
RUN pnpm exec rspack build --config ./rspack.build.prod.js

#TODO?
# npm publish

# --- Serve Stage ---
FROM caddy:2.10.0-alpine

# Copy built static files
COPY --from=builder /app/dist /usr/share/caddy

# Copy Caddy server config
COPY docker/prod/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]

# The steps for this are finisshed and the next steps woudl be the following:

# 1. Build the image and publish the image on the gitlab registry
# 2. Deploy the image on the server
# 3. Configure the server to use the new image
# 4. On the server, we will probably have a custom Caddyfile that will be used to configure the server
# Example of a docker-compose.yml file:
# services:
#  frontend:
#    image: registry.gitlab.com/your-group/your-project/frontend:latest
#    ports:
#      - "8080:80"
#    volumes:
#      - ./server-specific/Caddyfile:/etc/caddy/Caddyfile:ro


# Example of a nginx server stage:
# --- Serve Stage ---
#FROM nginx:alpine
#
## Copy built static files
#COPY --from=builder /app/dist /usr/share/nginx/html
#
## Copy custom Nginx config
#COPY docker/prod/nginx.conf /etc/nginx/nginx.conf
#
#EXPOSE 80
#
#CMD ["nginx", "-g", "daemon off;"]

# Example of a nginx.conf file:
#events {}
#
#http {
#    include       mime.types;
#    default_type  application/octet-stream;
#
#    server {
#        listen 80;
#        server_name _;
#
#        root /usr/share/nginx/html;
#        index index.html;
#
#        location / {
#            try_files $uri $uri/ /index.html;
#        }
#
#        gzip on;
#        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
#    }
#}