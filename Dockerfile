FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install --frozen-lockfile

EXPOSE 8080

CMD ["sh", "-c", "bun run db:deploy && bun run dev"]