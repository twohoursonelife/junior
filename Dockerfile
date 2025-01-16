FROM oven/bun:alpine

WORKDIR /app
COPY package.json bun.lockb ./
RUN bun run sync
COPY . .

CMD ["bun", "run", "junior.js"]
