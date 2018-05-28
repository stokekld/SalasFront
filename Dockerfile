FROM node:8.11.2-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install --production

CMD ["npx", "babel-node", "server.js"]
