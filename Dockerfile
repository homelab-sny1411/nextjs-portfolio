FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN printf 'onlyBuiltDependencies[]=@sentry/cli\nonlyBuiltDependencies[]=sharp\nonlyBuiltDependencies[]=unrs-resolver\n' > .npmrc && \
    pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM node:22-alpine AS production

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]