FROM node:18-alpine AS client

WORKDIR /usr/src/client

COPY package.json . 
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm run start"]