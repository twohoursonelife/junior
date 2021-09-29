FROM alpine:latest
RUN apk --no-cache add nodejs-current npm

WORKDIR /app
ADD . /app

RUN npm install

CMD ["node", "junior.js"]
