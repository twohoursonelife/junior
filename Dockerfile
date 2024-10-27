FROM oven/bun:alpine

WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile --production
COPY . .

CMD ["bun", "run", "junior.js"]
