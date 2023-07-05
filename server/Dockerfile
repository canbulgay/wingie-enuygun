# Stage 1: Build the server
FROM node:18-alpine AS server

WORKDIR /usr/src/server

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node","index.js"]
