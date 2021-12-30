FROM node:10-alpine

WORKDIR /usr/src/app

COPY ./server/package.json .
RUN npm i

COPY . .

WORKDIR /usr/src/app/server

CMD ["node", "ludo.js"]
EXPOSE 80
