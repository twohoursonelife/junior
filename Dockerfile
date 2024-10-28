FROM oven/bun:alpine

WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile --production
COPY . .

RUN ls

CMD ["bun", "run", "junior.js"]
