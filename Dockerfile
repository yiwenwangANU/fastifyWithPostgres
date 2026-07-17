FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozon-lockfile

COPY src ./src

EXPOSE 8080

CMD ["bun", "run", "./src/index.ts"]