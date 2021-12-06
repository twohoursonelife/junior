FROM node:16.13-alpine3.14

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . /app

CMD ["node", "junior.js"]
