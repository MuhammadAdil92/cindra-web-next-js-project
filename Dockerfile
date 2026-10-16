FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies once with lockfile for reproducible builds.
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app

ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Keep production env explicit in Docker builds.
COPY environments/.production.env ./environments/.production.env

# Uses project script that loads environments/.production.env.
RUN npm run build:production

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create non-root user for runtime security.
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Standalone output already contains required server files and dependencies.
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
