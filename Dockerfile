FROM node:alpine
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# nginx file system commands
FROM nginx
# this will map the port for production file
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html
