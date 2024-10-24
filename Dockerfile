FROM alpine

RUN apk add --update nodejs npm

WORKDIR /app

COPY package*.json ./

RUN npm clean-install

COPY . .

CMD ["node", "junior.js"]
