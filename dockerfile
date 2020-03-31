FROM node:10-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm i

CMD ["node", "ludo.js"]
