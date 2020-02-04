FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .
CMD [ "node", "server/server.js" ]