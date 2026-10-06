FROM oven/bun:alpine

WORKDIR /app
COPY package.json bun.lock ./
RUN bun run sync
COPY . .

CMD ["bun", "run", "junior.js"]
