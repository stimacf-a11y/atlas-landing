FROM oven/bun:1-slim AS build
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install

COPY . .
RUN bun run build

FROM node:22-slim AS run
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output ./.output

EXPOSE 8080
CMD ["node", ".output/server/index.mjs"]
