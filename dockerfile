FROM node:10

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/server
RUN npm i

CMD ["node", "ludo.js"]
