FROM node:20-alpine

ENV NODE_ENV=production \
    DATABASE_URL=postgresql://postgres:build-only@localhost:5432/volunteer_platform

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-workspace.yaml turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN pnpm install --no-frozen-lockfile \
    && pnpm db:generate \
    && pnpm build

EXPOSE 3001
CMD ["sh", "-c", "pnpm --filter @volunteer/database exec prisma db push --schema prisma/schema.prisma && pnpm --filter @volunteer/api start"]
